'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Trophy, Sparkles, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

const demoTabs = [
  {
    id: 'ai-tutor',
    name: 'AI Tutor Showcase',
    description: 'Experience real-time AI tutoring',
    icon: Brain
  },
  {
    id: 'competition',
    name: 'Competition Platform',
    description: 'Live leaderboard and challenges',
    icon: Trophy
  },
  {
    id: 'personalization',
    name: 'Personalization Engine',
    description: 'See AI adapt to learning style',
    icon: Sparkles
  }
];

const sampleQuestions = [
  "Explain quadratic equations in simple terms",
  "How does photosynthesis work?",
  "What is the difference between mitosis and meiosis?",
  "Can you help me with this algebra problem?"
];

const leaderboardData = [
  { name: 'Arjun K.', score: 2847, avatar: '👦', streak: 15, rank: 1 },
  { name: 'Priya S.', score: 2832, avatar: '👧', streak: 12, rank: 2 },
  { name: 'Rohit M.', score: 2821, avatar: '👨', streak: 8, rank: 3 },
  { name: 'Sneha P.', score: 2815, avatar: '👩', streak: 20, rank: 4 },
  { name: 'You', score: 2809, avatar: '🎯', streak: 6, rank: 5 }
];

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState('ai-tutor');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      content: "Hi! I'm your AI tutor. Ask me any academic question and I'll explain it in a way that matches your learning style! 🤖✨"
    }
  ]);

  const handleSendMessage = () => {
    if (!currentQuestion.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { type: 'user', content: currentQuestion },
      { 
        type: 'ai', 
        content: "Great question! Let me break this down for you step by step with visual examples and interactive elements..." 
      }
    ];
    
    setChatMessages(newMessages);
    setCurrentQuestion('');
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Experience the{' '}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Future of Learning
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Try our interactive demos and see how AI transforms the learning experience for students, parents, and educators.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="glass-strong rounded-xl p-2 border border-glass-border">
            {demoTabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 min-w-48",
                  activeTab === tab.id
                    ? "bg-primary text-white glow-primary"
                    : "text-neutral-300 hover:text-white hover:glass"
                )}
                whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon size={20} />
                <div className="text-left">
                  <div className="font-semibold">{tab.name}</div>
                  <div className="text-xs opacity-80">{tab.description}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Demo Content */}
        <motion.div
          className="glass-strong rounded-2xl border border-glass-border overflow-hidden transform-3d"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {/* AI Tutor Demo */}
            {activeTab === 'ai-tutor' && (
              <motion.div
                key="ai-tutor"
                className="p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Chat Interface */}
                  <div>
                    <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-t-xl">
                      <div className="flex items-center space-x-3 text-white">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <Brain size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold">AI Learning Companion</h3>
                          <p className="text-sm opacity-90">Always ready to help</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-50 h-80 p-4 overflow-y-auto space-y-4">
                      {chatMessages.map((message, index) => (
                        <motion.div
                          key={index}
                          className={cn(
                            "flex",
                            message.type === 'user' ? "justify-end" : "justify-start"
                          )}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div
                            className={cn(
                              "max-w-xs p-3 rounded-lg",
                              message.type === 'user'
                                ? "bg-primary text-white"
                                : "bg-white border border-neutral-200"
                            )}
                          >
                            {message.content}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-white p-4 rounded-b-xl border-t border-neutral-200">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          value={currentQuestion}
                          onChange={(e) => setCurrentQuestion(e.target.value)}
                          placeholder="Ask me anything about your studies..."
                          className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <motion.button
                          onClick={handleSendMessage}
                          className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Send size={20} />
                        </motion.button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {sampleQuestions.map((question, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentQuestion(question)}
                            className="text-xs bg-neutral-100 hover:bg-neutral-200 px-3 py-1 rounded-full transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {question}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Features */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-semibold text-xl mb-4">AI Features in Action</h4>
                      <div className="space-y-4">
                        {[
                          { icon: '🧠', title: 'Adaptive Learning', desc: 'AI adjusts to your pace and style' },
                          { icon: '💡', title: 'Smart Explanations', desc: 'Complex topics made simple' },
                          { icon: '🎯', title: 'Personalized Practice', desc: 'Problems tailored to your level' },
                          { icon: '📊', title: 'Progress Tracking', desc: 'Real-time learning analytics' }
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ x: 5, backgroundColor: '#f8fafc' }}
                          >
                            <span className="text-2xl">{feature.icon}</span>
                            <div>
                              <h5 className="font-semibold text-neutral-900">{feature.title}</h5>
                              <p className="text-sm text-neutral-600">{feature.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Competition Platform Demo */}
            {activeTab === 'competition' && (
              <motion.div
                key="competition"
                className="p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Live Leaderboard */}
                  <div>
                    <div className="bg-gradient-to-r from-secondary to-accent p-4 rounded-t-xl">
                      <h3 className="text-white font-semibold text-lg flex items-center space-x-2">
                        <Trophy size={20} />
                        <span>Live Leaderboard</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-auto" />
                      </h3>
                    </div>

                    <div className="bg-white border border-neutral-200 rounded-b-xl p-4">
                      <div className="space-y-3">
                        {leaderboardData.map((player, index) => (
                          <motion.div
                            key={index}
                            className={cn(
                              "flex items-center justify-between p-3 rounded-lg border",
                              player.name === 'You' 
                                ? "bg-primary/5 border-primary/20" 
                                : "bg-neutral-50 border-neutral-200"
                            )}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                index === 0 ? "bg-yellow-500" : 
                                index === 1 ? "bg-gray-400" : 
                                index === 2 ? "bg-orange-600" : "bg-primary"
                              )}>
                                {player.rank}
                              </div>
                              <span className="text-2xl">{player.avatar}</span>
                              <div>
                                <div className="font-semibold">{player.name}</div>
                                <div className="text-xs text-neutral-600">{player.streak} day streak</div>
                              </div>
                            </div>
                            <div className="font-bold text-lg text-primary">
                              {player.score.toLocaleString()}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Competition Details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-semibold text-xl mb-4">Active Competitions</h4>
                      <div className="space-y-4">
                        {[
                          { name: 'Math Olympiad Prep', participants: 1247, prize: '₹50,000', deadline: '3 days left' },
                          { name: 'Science Quiz Championship', participants: 892, prize: '₹25,000', deadline: '1 week left' },
                          { name: 'English Essay Contest', participants: 564, prize: '₹15,000', deadline: '5 days left' }
                        ].map((comp, index) => (
                          <motion.div
                            key={index}
                            className="p-4 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-semibold text-neutral-900">{comp.name}</h5>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {comp.deadline}
                              </span>
                            </div>
                            <div className="flex justify-between text-sm text-neutral-600">
                              <span>{comp.participants} participants</span>
                              <span className="font-semibold text-secondary">{comp.prize} prize pool</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Personalization Engine Demo */}
            {activeTab === 'personalization' && (
              <motion.div
                key="personalization"
                className="p-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="max-w-2xl mx-auto">
                    <h3 className="font-display font-semibold text-2xl mb-4">
                      AI Personalization Engine
                    </h3>
                    <p className="text-neutral-600 mb-8">
                      Watch how our AI adapts content difficulty and teaching style in real-time based on student performance.
                    </p>

                    <motion.div
                      className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-white"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(67, 56, 202, 0.4)",
                          "0 0 0 20px rgba(67, 56, 202, 0)",
                          "0 0 0 0 rgba(67, 56, 202, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles size={48} className="mx-auto mb-4" />
                      <h4 className="text-xl font-semibold mb-2">Coming Soon!</h4>
                      <p className="opacity-90">
                        Interactive personalization demo will be available in the full platform.
                        Experience how AI understands your unique learning pattern!
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}