"use client";
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Key,
  Shield,
  Users,
  Clock,
  FileText,
  Bell,
} from "lucide-react";

export default function GatePassProjectDetails() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-6">
        <div
          href="/portfolio"
          className="inline-flex items-center text-purple-700 hover:text-purple-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="rounded-full bg-indigo-900 p-4 w-48 h-48 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Gate Pass Management Logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
              Gate Pass Management System
            </h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Authentication
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Security
              </span>
            </div>
            <p className="text-gray-700 mb-6">
              A comprehensive gate pass management solution designed to enhance
              security and streamline visitor management for organizations,
              residential complexes, and educational institutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md font-medium transition-colors">
                Live Demo
              </button>
              <button className="px-4 py-2 border border-purple-700 text-purple-700 hover:bg-purple-50 rounded-md font-medium transition-colors">
                View Source Code
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-4 w-full max-w-2xl mx-auto border rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-2 text-center transition-colors ${
                activeTab === "overview"
                  ? "bg-purple-100 text-purple-800 font-medium"
                  : "bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`py-2 text-center transition-colors ${
                activeTab === "features"
                  ? "bg-purple-100 text-purple-800 font-medium"
                  : "bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("tech")}
              className={`py-2 text-center transition-colors ${
                activeTab === "tech"
                  ? "bg-purple-100 text-purple-800 font-medium"
                  : "bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveTab("screenshots")}
              className={`py-2 text-center transition-colors ${
                activeTab === "screenshots"
                  ? "bg-purple-100 text-purple-800 font-medium"
                  : "bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              Screenshots
            </button>
          </div>

          <div
            className={`mt-6 ${activeTab === "overview" ? "block" : "hidden"}`}
          >
            <div className="grid gap-6">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">
                  Project Overview
                </h2>
                <p>
                  The Gate Pass Management System is a secure and efficient
                  solution for managing visitor access to premises. It provides
                  role-based access control, real-time notifications, and
                  comprehensive reporting to ensure maximum security while
                  maintaining a smooth visitor experience.
                </p>
                <p>
                  This project was developed to address the challenges faced by
                  organizations in managing visitor access, tracking entry/exit
                  times, and maintaining security protocols. The system replaces
                  traditional paper-based methods with a digital solution that
                  enhances security, improves efficiency, and provides valuable
                  insights.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mt-6 mb-3">
                  Key Problems Solved
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Elimination of unauthorized access through robust
                      authentication
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Streamlined visitor registration and approval process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Real-time monitoring and notifications for security
                      personnel
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Comprehensive reporting for audit and compliance purposes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`mt-6 ${activeTab === "features" ? "block" : "hidden"}`}
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Role-Based Access Control
                    </h3>
                    <p className="text-gray-600">
                      Different access levels for administrators, security
                      personnel, and visitors with customized permissions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Key className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Digital Pass Generation
                    </h3>
                    <p className="text-gray-600">
                      Automated generation of secure, QR-coded passes that can
                      be verified at entry points.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Bell className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Real-time Notifications
                    </h3>
                    <p className="text-gray-600">
                      Instant alerts for new visitor requests, approvals, and
                      entries/exits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Time Tracking</h3>
                    <p className="text-gray-600">
                      Automatic recording of entry and exit times for all
                      visitors and personnel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Security Protocols
                    </h3>
                    <p className="text-gray-600">
                      Advanced security measures including identity verification
                      and blacklist checking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Comprehensive Reporting
                    </h3>
                    <p className="text-gray-600">
                      Detailed reports and analytics on visitor traffic, peak
                      hours, and security incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-6 ${activeTab === "tech" ? "block" : "hidden"}`}>
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-purple-700 mb-4">
                  Frontend
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">React.js</span> - For building
                    the user interface
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Next.js</span> - For
                    server-side rendering and routing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Tailwind CSS</span> - For
                    styling and responsive design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">React Hook Form</span> - For
                    form validation
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-purple-700 mb-4">
                  Backend
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Node.js</span> - Server
                    runtime environment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Express.js</span> - Web
                    application framework
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">MongoDB</span> - Database for
                    storing user and pass data
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">JWT</span> - For secure
                    authentication
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Socket.io</span> - For
                    real-time notifications
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-purple-700 mb-4">
                  Security Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Bcrypt</span> - For password
                    hashing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">HTTPS</span> - For secure data
                    transmission
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Rate limiting</span> - To
                    prevent brute force attacks
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Input validation</span> - To
                    prevent injection attacks
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-purple-700 mb-4">
                  Deployment
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">Vercel</span> - For frontend
                    hosting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">MongoDB Atlas</span> - For
                    database hosting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span className="font-medium">CI/CD Pipeline</span> - For
                    automated testing and deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`mt-6 ${
              activeTab === "screenshots" ? "block" : "hidden"
            }`}
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              Application Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-100 p-2 text-sm font-medium">
                  Login Screen
                </div>
                <div className="p-4 flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000041169.jpg-YWr1v9typBqAe7PAJIDqZveww0Eiu9.jpeg"
                    alt="Gate Pass Login Screen"
                    width={300}
                    height={600}
                    className="rounded-md shadow-sm"
                  />
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-100 p-2 text-sm font-medium">
                  Dashboard
                </div>
                <div className="p-4 flex justify-center bg-gray-50 h-[600px] items-center">
                  <p className="text-gray-500 text-center">
                    Admin dashboard with visitor statistics and recent activity
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-100 p-2 text-sm font-medium">
                  Pass Generation
                </div>
                <div className="p-4 flex justify-center bg-gray-50 h-[300px] items-center">
                  <p className="text-gray-500 text-center">
                    Digital pass with QR code for visitor verification
                  </p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-100 p-2 text-sm font-medium">
                  Visitor Management
                </div>
                <div className="p-4 flex justify-center bg-gray-50 h-[300px] items-center">
                  <p className="text-gray-500 text-center">
                    Interface for managing visitor requests and approvals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
