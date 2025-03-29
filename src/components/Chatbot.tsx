import { useState, useEffect, useRef } from "react";
import { X, Send, MessageSquare, Minus, Calendar } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import React from "react";

type Message = {
  role: string;
  content: string;
  options?: any[];
  calendlyLink?: any;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Please enter your email to proceed:" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessageInput, setShowMessageInput] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const latestMessageRef = useRef<HTMLDivElement>(null);
  const reappearTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Calendly URL - you can change this to your actual Calendly link
  const calendlyUrl = "https://calendly.com/abhiket29";

  // Enhanced smooth scrolling for new messages
  useEffect(() => {
    if (chatRef.current && messages.length > 0) {
      // Smooth scroll to bottom with animation
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // Scroll to the latest message when it appears
  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (reappearTimerRef.current) {
        clearTimeout(reappearTimerRef.current);
      }
    };
  }, []);

  // Function to open Calendly in a new tab
  const openCalendly = (url: string = calendlyUrl) => {
    window.open(url, "_blank");
  };

  const initialOptions = [
    {
      label: "Basic Introduction",
      response:
        "Hello! I'm Abhiket's personal assistant. How can I assist you today?",
      nextOptions: [
        {
          label: "Hi! What do you do?",
          response:
            "Hey there! I'm Abhiket's personal assistant. Abhiket is a software developer specializing in Frontend Technologies like React.js, and Flutter. He's open for freelance and contract work. How can I help you today?",
        },
        {
          label: "Are you available for new projects?",
          response:
            "Yes! Abhiket is currently open to new freelance and contract opportunities.",
        },
      ],
    },
    // ... (rest of the initialOptions remain the same as in the previous implementation)
  ];

  const handleSubmit = async () => {
    if (!input.trim()) return;

    if (step === 1) {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input)) {
        toast.error("Please enter a valid email address.");
        return;
      }
      setUserEmail(input);
    } else if (step === 2) {
      // Validate name (only alphabets, spaces allowed)
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(input)) {
        toast.error("Please enter a valid name (only alphabets allowed).");
        return;
      }
      setUserName(input);
    }

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    // Handle custom message submission
    if (showMessageInput && step > 2) {
      setIsLoading(true);

      try {
        const res = await fetch(`${window.location.origin}/api/sendChat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userEmail,
            userName: userName,
            message: input,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error("Failed to send message:", errorData);
          toast.error(errorData.message || "Failed to send message.");
        } else {
          toast.success(
            "Your message has been sent! We'll get back to you soon."
          );

          // Add bot's response after sending the message
          setMessages([
            ...newMessages,
            {
              role: "bot",
              content:
                "Thank you for your message! We'll get back to you as soon as possible.",
            },
          ]);

          // Hide the message input after sending
          setShowMessageInput(false);

          // After a delay, show options again
          setTimeout(() => {
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                role: "bot",
                content: `What else can I help you with today, ${
                  userName || "Guest"
                }?`,
                options: initialOptions,
              },
            ]);
          }, 2000);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message. Please try again.");
      }

      setIsLoading(false);
      setInput("");
      return;
    }

    setInput("");

    if (step === 1) {
      setMessages([
        ...newMessages,
        { role: "bot", content: "Thanks! Now, please enter your name:" },
      ]);
      setStep(2);
    } else if (step === 2) {
      const welcomeMsg = `Welcome, ${input}! How can I assist you today?`;

      setMessages([...newMessages, { role: "bot", content: welcomeMsg }]);

      // Delay showing the next options
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "bot",
            content: "Please select an option:",
            options: initialOptions,
          },
        ]);
        setStep(3);
      }, 1500);
    }
  };

  const handleSelection = async (
    selectedOption: string,
    response: string,
    nextOptions: any,
    calendlyLink?: string,
    enableMessageInput?: boolean
  ) => {
    const newMessages = [
      ...messages,
      { role: "user", content: selectedOption },
    ];

    // Add the bot's response
    const botResponse = { role: "bot", content: response } as Message;

    // Add calendly link to the message if provided
    if (calendlyLink) {
      botResponse.calendlyLink = calendlyLink;
    }

    const updatedMessages = [...newMessages, botResponse];
    setMessages(updatedMessages);

    // Check if we should enable message input (for "Leave a message" option)
    if (enableMessageInput) {
      setShowMessageInput(true);
      return;
    }

    // Hide message input if it was previously shown
    setShowMessageInput(false);

    if (selectedOption === "Chat with a representative now") {
      if (!userEmail || !userName) {
        toast.error("Please enter your email and name before proceeding.");
        return;
      }

      setIsLoading(true);

      try {
        const res = await fetch(`${window.location.origin}/api/sendChat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userEmail,
            userName: userName,
            message: `${userName} wants to chat with a representative.`,
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error("Failed to send email:", errorData);
          toast.error(errorData.message || "Failed to send request.");
        } else {
          toast.success(
            "Your request has been sent! A representative will contact you soon."
          );
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send request. Please try again.");
      }

      setIsLoading(false);

      // Delay before showing the next options
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "bot",
            content: `What else can I help you with today, ${
              userName || "Guest"
            }?`,
            options: initialOptions,
          },
        ]);
      }, 1000);

      return;
    }

    if (!nextOptions) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "bot",
            content: `What else can I help you with today, ${
              userName || "Guest"
            }?`,
            options: initialOptions,
          },
        ]);
      }, 3000);
    } else {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "bot",
            content: "Please select an option:",
            options: nextOptions,
          },
        ]);
      }, 1000);
    }
  };

  const handleClose = () => {
    setIsVisible(false);

    // Set timer to reappear after 5 seconds
    reappearTimerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  };

  const handleChatbotClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Chatbot Launcher - Round Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
          {/* Floating Message */}
          <motion.span
            className="mb-2 px-3 py-1 bg-purple-500  text-white font-mono text-md rounded-lg shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Need help?
          </motion.span>

          {/* Chat Button */}
          <motion.div
            className="w-16 h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
            onClick={handleChatbotClick}
            animate={{
              scale: [1, 1.2, 1], // Zoom in and out effect
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageSquare className="text-white" size={28} />
          </motion.div>
        </div>
      )}

      {/* Existing Chatbot Component */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 z-50 flex flex-col bg-white shadow-lg rounded-lg w-[85%] sm:w-[20rem] md:w-[26rem] border border-gray-200 overflow-hidden transition-all duration-300 ${
            isMinimized ? "h-[52px]" : "h-[380px]"
          } animate-slideUp`}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between bg-gradient-to-r from-pink-500 via-slate-700 to-purple-700 text-white p-3 rounded-t-lg cursor-pointer"
            onClick={isMinimized ? () => setIsMinimized(false) : undefined}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-full overflow-hidden flex items-center justify-center">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7"
                  >
                    <circle cx="18" cy="18" r="18" fill="#3B82F6" />
                    <circle cx="18" cy="15" r="6" fill="white" />
                    <path
                      d="M18 33C22.9706 33 27 28.9706 27 24C27 19.0294 8 19.0294 8 24C8 28.9706 13.0294 33 18 33Z"
                      fill="white"
                    />
                    <circle cx="15" cy="14" r="2" fill="#3B82F6" />
                    <circle cx="21" cy="14" r="2" fill="#3B82F6" />
                    <path
                      d="M15 19C15 19 16.5 21 18 21C19.5 21 21 19 21 19"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
              </div>
              <h3 className="font-medium">AskDevloper</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-white hover:text-gray-200 transition-colors focus:outline-none p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(!isMinimized);
                }}
                aria-label="Minimize chat"
              >
                <Minus size={18} />
              </button>
              <button
                className="text-white hover:text-gray-200 transition-colors focus:outline-none p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area - Only visible when not minimized */}
          {!isMinimized && (
            <>
              <div
                ref={chatRef}
                className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f0f0f0' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E')",
                  backgroundSize: "200px 200px",
                }}
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-3 max-w-[85%] ${
                      msg.role === "user" ? "ml-auto" : "mr-auto"
                    } ${index === messages.length - 1 ? "animate-fadeIn" : ""}`}
                    ref={
                      index === messages.length - 1 ? latestMessageRef : null
                    }
                  >
                    {/* Add avatar for bot messages */}
                    {msg.role === "bot" && (
                      <div className="flex items-start mb-1">
                        <div className="w-6 h-6 bg-blue-500 rounded-full overflow-hidden flex items-center justify-center mr-2 mt-1">
                          <svg
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                          >
                            <circle cx="18" cy="15" r="6" fill="white" />
                            <path
                              d="M18 33C22.9706 33 27 28.9706 27 24C27 19.0294 8 19.0294 8 24C8 28.9706 13.0294 33 18 33Z"
                              fill="white"
                            />
                            <circle cx="15" cy="14" r="2" fill="#3B82F6" />
                            <circle cx="21" cy="14" r="2" fill="#3B82F6" />
                            <path
                              d="M15 19C15 19 16.5 21 18 21C19.5 21 21 19 21 19"
                              stroke="#3B82F6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    )}

                    <div
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`px-4 py-3 rounded-lg shadow-sm ${
                          msg.role === "user"
                            ? "bg-blue-500 text-white rounded-br-none animate-slideInRight"
                            : "bg-gray-100 text-gray-800 rounded-bl-none animate-slideInLeft"
                        }`}
                      >
                        {msg.content.startsWith("http") ? (
                          <a
                            href={msg.content}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                              msg.role === "user"
                                ? "text-blue-100"
                                : "text-blue-600"
                            } underline`}
                          >
                            {msg.content}
                          </a>
                        ) : (
                          <span>{msg.content}</span>
                        )}

                        {/* Calendly Button */}
                        {msg.calendlyLink && (
                          <div className="mt-3">
                            <button
                              onClick={() => openCalendly(msg.calendlyLink)}
                              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-2 px-4 rounded-md transition-all duration-200 w-full font-medium animate-pulse"
                            >
                              <Calendar size={18} />
                              Book a Meeting
                            </button>
                          </div>
                        )}

                        {/* Render options if they exist for this message */}
                        {msg.options && (
                          <div className="mt-3 space-y-2">
                            {msg.options.map(
                              (option: any, optionIndex: number) => (
                                <button
                                  key={optionIndex}
                                  className={`w-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md transition-all text-sm text-left animate-fadeIn ${
                                    isLoading
                                      ? "opacity-50 cursor-not-allowed"
                                      : "hover:shadow-md hover:translate-x-1 hover:scale-[1.01]"
                                  }`}
                                  style={{
                                    animationDelay: `${optionIndex * 100}ms`,
                                  }}
                                  onClick={() =>
                                    !isLoading &&
                                    handleSelection(
                                      option.label,
                                      option.response,
                                      option.nextOptions,
                                      option.calendlyLink,
                                      option.enableMessageInput
                                    )
                                  }
                                  disabled={isLoading}
                                >
                                  {option.label}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`text-xs mt-1 ${
                        msg.role === "user"
                          ? "text-right text-gray-600"
                          : "text-left text-gray-600 ml-2"
                      }`}
                    >
                      {msg.role === "user" ? "You" : "AskDevloper"}
                    </div>
                  </div>
                ))}

                {/* Add typing indicator when loading */}
                {isLoading && (
                  <div className="mb-3 max-w-[85%] mr-auto animate-fadeIn">
                    <div className="flex items-start mb-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full overflow-hidden flex items-center justify-center mr-2 mt-1">
                        <svg
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                        >
                          <circle cx="18" cy="15" r="6" fill="white" />
                          <path
                            d="M18 33C22.9706 33 27 28.9706 27 24C27 19.0294 8 19.0294 8 24C8 28.9706 13.0294 33 18 33Z"
                            fill="white"
                          />
                          <circle cx="15" cy="14" r="2" fill="#3B82F6" />
                          <circle cx="21" cy="14" r="2" fill="#3B82F6" />
                          <path
                            d="M15 19C15 19 16.5 21 18 21C19.5 21 21 19 21 19"
                            stroke="#3B82F6"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-100 text-gray-800 rounded-lg rounded-bl-none shadow-sm inline-flex">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                    <div className="text-xs mt-1 text-left text-gray-600 ml-8">
                      AskDevloper
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area - Show for email/name collection OR when message input is enabled */}
              {(step < 3 || showMessageInput) && (
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                  <div className="flex">
                    <input
                      className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder={
                        step === 1
                          ? "Enter your email..."
                          : step === 2
                          ? "Enter your name..."
                          : "Type your message here..."
                      }
                    />
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg transition-colors"
                      onClick={handleSubmit}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
      {/* Add CSS for animations and typing indicator */}
      <style>{`
        .typing-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #3b82f6;
          margin: 0 2px;
          animation: typing 1.4s infinite ease-in-out both;
        }

        .typing-dot:nth-child(1) {
          animation-delay: 0s;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          80%,
          100% {
            transform: scale(0.6);
            opacity: 0.6;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.4s ease forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.4s ease forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <ToastContainer position="top-right" theme="colored" />
    </>
  );
}
