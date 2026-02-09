
import React from 'react';
import { Layers, Server, Database, Shield, Zap, DollarSign, AlertTriangle } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">System Blueprint: Ustoz Abroad</h1>
        <p className="text-slate-500 mb-12">Comprehensive technical and architectural plan for the digital ecosystem.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Architecture Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center mb-6">
              <Layers className="text-blue-600 mr-3" />
              <h2 className="text-xl font-bold">1. System Architecture</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <p><strong className="text-slate-900">Frontend:</strong> Single Page Application (SPA) for high responsiveness. Uses React with Tailwind CSS for layout. State management via React Context or Redux Toolkit.</p>
              <p><strong className="text-slate-900">Backend:</strong> Node.js Microservices. Dedicated services for User Auth, Mentor Booking, and AI Document Processing.</p>
              <p><strong className="text-slate-900">API Gateway:</strong> Centralized entry point using Nginx or AWS API Gateway to manage routing, rate limiting, and security.</p>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center mb-6">
              <Zap className="text-orange-500 mr-3" />
              <h2 className="text-xl font-bold">2. Tech Stack</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-lg">Frontend: React + TS</div>
              <div className="p-3 bg-slate-50 rounded-lg">Styling: Tailwind CSS</div>
              <div className="p-3 bg-slate-50 rounded-lg">Backend: Node (Express)</div>
              <div className="p-3 bg-slate-50 rounded-lg">DB: PostgreSQL</div>
              <div className="p-3 bg-slate-50 rounded-lg">Cache: Redis</div>
              <div className="p-3 bg-slate-50 rounded-lg">Storage: AWS S3</div>
              <div className="p-3 bg-slate-50 rounded-lg">AI: Gemini API</div>
              <div className="p-3 bg-slate-50 rounded-lg">Payments: Click/Payme</div>
            </div>
          </div>

          {/* Database Schema */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 md:col-span-2">
            <div className="flex items-center mb-6">
              <Database className="text-purple-600 mr-3" />
              <h2 className="text-xl font-bold">3. Database Schema (PostgreSQL)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
              <div className="border border-slate-100 p-4 rounded-xl">
                <h4 className="font-bold mb-2">Users & Roles</h4>
                <ul className="list-disc pl-4 opacity-70">
                  <li>id (UUID)</li>
                  <li>email (String)</li>
                  <li>password_hash</li>
                  <li>role (STUDENT, MENTOR, ADMIN)</li>
                  <li>profile_completed (Bool)</li>
                </ul>
              </div>
              <div className="border border-slate-100 p-4 rounded-xl">
                <h4 className="font-bold mb-2">Mentors & Bookings</h4>
                <ul className="list-disc pl-4 opacity-70">
                  <li>mentor_id</li>
                  <li>university_name</li>
                  <li>hourly_rate</li>
                  <li>consultations (JSONB)</li>
                  <li>availability_slots</li>
                </ul>
              </div>
              <div className="border border-slate-100 p-4 rounded-xl">
                <h4 className="font-bold mb-2">Education Content</h4>
                <ul className="list-disc pl-4 opacity-70">
                  <li>universities_catalog</li>
                  <li>scholarship_registry</li>
                  <li>country_requirements</li>
                  <li>document_templates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Flow */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center mb-6">
              <Shield className="text-green-600 mr-3" />
              <h2 className="text-xl font-bold">4. User Flow</h2>
            </div>
            <div className="space-y-4 text-xs">
              <div className="flex items-center">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                Landing Page -> Onboarding (Profile Setup)
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                Search University -> Filter by Scores/Country
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                Book Mentor -> Pay (Click/Payme) -> Video Session
              </div>
              <div className="flex items-center">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">4</span>
                AI Doc Prep -> Final Review -> App Submission
              </div>
            </div>
          </div>

          {/* Monetization */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center mb-6">
              <DollarSign className="text-yellow-600 mr-3" />
              <h2 className="text-xl font-bold">5. Monetization Strategy</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex justify-between">
                <span>Commission on Consultations:</span>
                <span className="font-bold text-slate-900">15-20%</span>
              </li>
              <li className="flex justify-between">
                <span>Premium AI Doc Prep:</span>
                <span className="font-bold text-slate-900">$29 / month</span>
              </li>
              <li className="flex justify-between">
                <span>Direct University Partnerships:</span>
                <span className="font-bold text-slate-900">B2B Leads</span>
              </li>
              <li className="flex justify-between">
                <span>Full Package Consulting:</span>
                <span className="font-bold text-slate-900">$500 - $2000</span>
              </li>
            </ul>
          </div>

          {/* Risks & Solutions */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 md:col-span-2">
            <div className="flex items-center mb-6">
              <AlertTriangle className="text-red-500 mr-3" />
              <h2 className="text-xl font-bold">6. Potential Risks & Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-sm mb-2 text-red-700">Payment Frauds</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Risk: Users might bypass the platform for payments. Solution: Escrow system where money is released to mentor only after session confirmation.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-2 text-red-700">Data Privacy (GDPR)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Risk: Storing passports and sensitive info. Solution: End-to-end encryption on S3 and auto-deletion policies for inactive files.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-2 text-red-700">Scalability</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Risk: Server crash during peak scholarship seasons. Solution: Serverless compute and Load Balancing.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-2 text-red-700">AI Accuracy</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Risk: AI hallucinating application rules. Solution: Human-in-the-loop review for premium users.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
