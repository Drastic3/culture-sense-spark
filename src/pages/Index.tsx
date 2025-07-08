import { useState } from "react";
import Navigation from "@/components/Navigation";
import StatsCard from "@/components/StatsCard";
import RecommendationCard from "@/components/RecommendationCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, TrendingUp, Eye, MessageSquare, Star, Bell } from "lucide-react";
import heroImage from "@/assets/hero-culturesense.jpg";

const Index = () => {
  const [activeInsights, setActiveInsights] = useState(0);

  const statsData = [
    {
      title: "Taste Matches",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: <Heart className="w-4 h-4" />,
      description: "Your cultural preferences alignment"
    },
    {
      title: "AI Conversations",
      value: "156",
      change: "+23.1%",
      changeType: "positive" as const,
      icon: <MessageSquare className="w-4 h-4" />,
      description: "Deep taste analysis sessions"
    },
    {
      title: "Community Reach",
      value: "8.2K",
      change: "+5.7%",
      changeType: "positive" as const,
      icon: <Users className="w-4 h-4" />,
      description: "People influenced by your taste"
    },
    {
      title: "Trend Accuracy",
      value: "94.3%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: <TrendingUp className="w-4 h-4" />,
      description: "Prediction success rate"
    }
  ];

  const recommendations = [
    {
      title: "Hidden Japanese Cinema Gems",
      description: "Discover underground films that match your aesthetic sensibilities and narrative preferences.",
      category: "Film",
      rating: 4.8,
      trending: true,
      image: "https://images.unsplash.com/photo-1489599510096-3d9dd652b1b5?w=400&h=300&fit=crop",
      tags: ["Minimalist", "Contemplative", "Artistic"]
    },
    {
      title: "Neo-Soul & Jazz Fusion",
      description: "AI-curated playlist based on your recent listening patterns and emotional resonance data.",
      category: "Music",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Soulful", "Innovative", "Emotional"]
    },
    {
      title: "Scandinavian Design Books",
      description: "Architectural and design philosophy that aligns with your minimalist preferences.",
      category: "Literature",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      tags: ["Minimalist", "Functional", "Aesthetic"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="CultureSense AI"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-8 pill-button bg-primary/10 text-primary border-primary/20 animate-fade-in-scale">
              <Eye className="w-3 h-3 mr-1 animate-pulse" />
              AI-Powered Cultural Analysis
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-8 leading-tight">
              <span className="gradient-text animate-glow">Discover Your</span>
              <br />
              <span className="text-foreground animate-fade-in-up">Cultural DNA</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
              Advanced AI analyzes your taste patterns to unlock personalized cultural recommendations 
              and predict trends before they emerge into mainstream consciousness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button variant="hero" size="xl" className="animate-fade-in-up micro-bounce text-lg font-semibold shadow-hover">
                Start Cultural Analysis
                <TrendingUp className="w-5 h-5 ml-2 animate-bounce-gentle" />
              </Button>
              <Button variant="pill-glass" size="xl" className="animate-fade-in-up font-semibold">
                Explore Dashboard
                <Eye className="w-5 h-5 ml-2 micro-glow" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData.map((stat, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>
      </section>

      {/* Active Insights */}
      <section className="container mx-auto px-6 py-12">
        <Card className="glass-card mb-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">
                  Active Cultural Insights
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Real-time analysis of your evolving taste profile and cultural patterns
                </CardDescription>
              </div>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 status-online px-4 py-2">
                <Bell className="w-4 h-4 mr-2" />
                Live Analysis
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 hover-lift">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-glow">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Emerging Patterns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your taste profile shows strong affinity for neo-minimalist aesthetics and sustainable design principles
                </p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-secondary/20 hover-lift">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-glow">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Trend Prediction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI predicts 94% likelihood of your early adoption in sustainable luxury movement
                </p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent-rose/10 via-accent-rose/5 to-transparent border border-accent-rose/20 hover-lift">
                <div className="w-16 h-16 bg-accent-rose/20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-glow">
                  <Users className="w-8 h-8 text-accent-rose" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cultural Resonance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your taste alignment resonates with Nordic design philosophy at 96.4% compatibility
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recommendations */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="gradient-text">Personalized</span> Recommendations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              AI-curated cultural discoveries based on your unique taste profile and emerging preference patterns
            </p>
          </div>
          <Button variant="outline" className="hover-lift">
            <TrendingUp className="w-4 h-4 mr-2" />
            View All Recommendations
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <RecommendationCard {...rec} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Padding for Mobile Navigation */}
      <div className="h-20 md:h-8"></div>
    </div>
  );
};

export default Index;
