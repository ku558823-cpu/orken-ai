import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RiskDashboardSection } from './components/RiskDashboardSection';
import { SecuritySection } from './components/SecuritySection';
import { ComplianceSection } from './components/ComplianceSection';
import { AgentMonitoringSection } from './components/AgentMonitoringSection';
import { PolicySection } from './components/PolicySection';
import { ReadinessAssessment } from './components/ReadinessAssessment';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { WatchDemoModal } from './components/WatchDemoModal';
import { AboutSection } from './components/AboutSection';
import { SecureAiAdoptionSection } from './components/SecureAiAdoptionSection';
import { ModernApproachSection } from './components/ModernApproachSection';
import { BusinessAdvantageSection } from './components/BusinessAdvantageSection';
import { IntegratedApproachSection } from './components/IntegratedApproachSection';
import { RiskGapsSection } from './components/RiskGapsSection';
import { TransformUncertaintySection } from './components/TransformUncertaintySection';
import { DashboardView } from './views/DashboardView';
import { ChatBot } from './components/ChatBot';

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    company: string;
  } | null>(null);

  // View state: Public Website vs Logged-in Enterprise Governance Portal
  const [isDashboardView, setIsDashboardView] = useState(false);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = (user: { name: string; email: string; company: string }) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setIsDashboardView(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsDashboardView(false);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If user toggles the Enterprise Dashboard view
  if (isDashboardView) {
    return (
      <>
        <DashboardView
          currentUser={currentUser}
          onLogout={handleLogout}
          onBackToWebsite={() => setIsDashboardView(false)}
        />
        <ChatBot
          onOpenDashboard={() => setIsDashboardView(true)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* 1. Header with Logo, Navigation, and Login */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onNavigateSection={scrollToSection}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLogout={handleLogout}
        isDashboardView={isDashboardView}
        onToggleDashboardView={() => setIsDashboardView(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section: "Build a Secure and Responsible AI Future" with screenshot styling */}
        <div id="hero">
          <Hero
            onOpenAuth={handleOpenAuth}
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onExploreDashboard={() => setIsDashboardView(true)}
          />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Transform Uncertainty Into Business Value Section */}
        <TransformUncertaintySection
          onConsultationClick={() => scrollToSection('contact')}
          onAssessmentClick={() => scrollToSection('assessment')}
        />

        {/* Explore More About Secure AI Adoption Section with Picture */}
        <SecureAiAdoptionSection
          onOpenContact={() => scrollToSection('contact')}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />

        {/* THE ORKEN EXPERIENCE: An Integrated Approach to AI Adoption */}
        <IntegratedApproachSection
          onLearnMoreClick={() => scrollToSection('services')}
        />

        {/* 3. AI Governance Services */}
        <ServicesSection />

        {/* 4. AI Risk Assessment Dashboard */}
        <RiskDashboardSection onOpenDashboard={() => setIsDashboardView(true)} />

        {/* Modern AI Requires a Modern Approach to Security Section */}
        <ModernApproachSection onScheduleReview={() => scrollToSection('contact')} />

        {/* Address the Gaps That Put AI Success at Risk */}
        <RiskGapsSection onScheduleReview={() => scrollToSection('contact')} />

        {/* 5. AI Security and Data Protection */}
        <SecuritySection />

        {/* 6. AI Compliance Management (EU AI Act, ISO 42001, NIST) */}
        <ComplianceSection />

        {/* 7. AI Agent Monitoring */}
        <AgentMonitoringSection />

        {/* 8. AI Policy Management */}
        <PolicySection />

        {/* 9. AI Readiness Assessment Tool */}
        <ReadinessAssessment onOpenContact={() => scrollToSection('contact')} />

        {/* 10. Interactive FAQ Section */}
        <FaqSection />

        {/* Make AI a Business Advantage Section */}
        <BusinessAdvantageSection onContactClick={() => scrollToSection('contact')} />

        {/* 11. Contact Form */}
        <ContactSection />
      </main>

      {/* 12. Professional Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenAuth={handleOpenAuth}
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onLoginSuccess={handleLoginSuccess}
      />

      <WatchDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onOpenPortal={() => {
          setIsDemoModalOpen(false);
          setIsDashboardView(true);
        }}
      />

      {/* Floating Enterprise AI Governance Chatbot */}
      <ChatBot
        onNavigateSection={scrollToSection}
        onOpenDashboard={() => setIsDashboardView(true)}
      />
    </div>
  );
}
