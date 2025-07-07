import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Mic, Heart, Star, TrendingUp } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  suggestions?: string[];
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your CultureSense AI assistant. I can help you discover new cultural preferences, analyze your taste patterns, and recommend personalized content. What would you like to explore today?",
      sender: "ai",
      timestamp: new Date(),
      suggestions: ["Analyze my music taste", "Find similar movies", "Discover new books", "Cultural trend analysis"]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you're interested in exploring that area of culture. Based on your profile, I can see some fascinating patterns in your preferences. Let me analyze this deeper...",
        sender: "ai",
        timestamp: new Date(),
        suggestions: ["Tell me more", "Show recommendations", "Analyze patterns", "Save insight"]
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-24 md:pb-8">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              <span className="gradient-text">AI Cultural</span> Assistant
            </h1>
            <p className="text-muted-foreground">
              Deep conversations about your taste, preferences, and cultural insights
            </p>
          </div>

          {/* Chat Messages */}
          <div className="space-y-8 mb-8">
            {messages.map((message) => (
              <div key={message.id} className="animate-slide-up">
                {message.sender === "ai" ? (
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-12 h-12 border-2 border-primary/30 hover-glow">
                      <AvatarFallback className="bg-gradient-primary text-white text-sm font-semibold">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 max-w-4xl">
                      <Card className="glass-card hover-lift">
                        <CardContent className="p-6">
                          <p className="text-foreground leading-relaxed text-lg">{message.content}</p>
                        </CardContent>
                      </Card>
                      
                      {message.suggestions && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="pill"
                              size="sm"
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-sm hover-lift bg-muted/50 hover:bg-primary/20 hover:text-primary border border-muted hover:border-primary/30"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start space-x-6 justify-end">
                    <div className="flex-1 max-w-3xl">
                      <Card className="bg-primary/10 border-primary/20 hover-lift">
                        <CardContent className="p-6">
                          <p className="text-foreground leading-relaxed text-lg">{message.content}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <Avatar className="w-12 h-12 border-2 border-secondary/30">
                      <AvatarFallback className="bg-secondary text-white text-sm font-semibold">
                        You
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-6 animate-scale-in">
                <Avatar className="w-12 h-12 border-2 border-primary/30 hover-glow">
                  <AvatarFallback className="bg-gradient-primary text-white text-sm font-semibold">
                    AI
                  </AvatarFallback>
                </Avatar>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "0.2s"}}></div>
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: "0.4s"}}></div>
                      </div>
                      <span className="text-base">CultureSense AI is analyzing your cultural patterns...</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Context Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card p-6 text-center hover-lift">
              <Heart className="w-8 h-8 text-accent-rose mx-auto mb-4 hover-glow" />
              <h3 className="text-lg font-medium text-foreground mb-2">Active Preferences</h3>
              <p className="text-sm text-muted-foreground">Minimalist • Artistic • Sustainable</p>
              <div className="mt-3 flex justify-center">
                <Badge variant="secondary" className="text-xs">87% Match</Badge>
              </div>
            </Card>
            
            <Card className="glass-card p-6 text-center hover-lift">
              <Star className="w-8 h-8 text-accent-amber mx-auto mb-4 hover-glow" />
              <h3 className="text-lg font-medium text-foreground mb-2">Taste Refinement</h3>
              <p className="text-sm text-muted-foreground">Elite Cultural Curator</p>
              <div className="mt-3 flex justify-center">
                <Badge variant="secondary" className="text-xs">94.3% Accuracy</Badge>
              </div>
            </Card>
            
            <Card className="glass-card p-6 text-center hover-lift">
              <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-4 hover-glow" />
              <h3 className="text-lg font-medium text-foreground mb-2">Trend Influence</h3>
              <p className="text-sm text-muted-foreground">Early Adopter Status</p>
              <div className="mt-3 flex justify-center">
                <Badge variant="secondary" className="text-xs">Top 5% Globally</Badge>
              </div>
            </Card>
          </div>

          {/* Input Area */}
          <Card className="glass-card fixed bottom-20 md:relative md:bottom-auto left-4 right-4 md:left-auto md:right-auto border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex-1 flex items-center space-x-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about your cultural preferences and patterns..."
                    className="border-0 bg-transparent focus-visible:ring-0 text-foreground placeholder:text-muted-foreground text-lg"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  />
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="sm" className="p-3 hover-glow">
                    <Mic className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim()}
                    className="px-6 py-3 hover-lift"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;