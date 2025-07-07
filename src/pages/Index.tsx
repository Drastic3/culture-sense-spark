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
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="CultureSense AI"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Eye className="w-3 h-3 mr-1" />
              AI-Powered Cultural Analysis
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Discover Your</span>
              <br />
              <span className="text-foreground">Cultural DNA</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced AI analyzes your taste patterns to unlock personalized cultural recommendations and predict trends before they happen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="animate-slide-up">
                Start Analysis
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="glass" size="lg" className="animate-slide-up">
                View Dashboard
                <Eye className="w-5 h-5 ml-2" />
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
      <section className="container mx-auto px-6 py-8">
        <Card className="glass-card mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Active Cultural Insights
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Real-time analysis of your evolving taste profile
                </CardDescription>
              </div>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 status-online">
                <Bell className="w-3 h-3 mr-1" />
                Live
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Emerging Patterns</h3>
                <p className="text-sm text-muted-foreground">
                  You're developing a strong preference for neo-minimalist aesthetics
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent-rose/10 border border-secondary/20">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Trend Prediction</h3>
                <p className="text-sm text-muted-foreground">
                  Your taste profile suggests early adoption of sustainable design
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent-rose/10 to-primary/10 border border-accent-rose/20">
                <div className="w-12 h-12 bg-accent-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent-rose" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Cultural Match</h3>
                <p className="text-sm text-muted-foreground">
                  94% alignment with Scandinavian design philosophy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recommendations */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Personalized Recommendations
            </h2>
            <p className="text-muted-foreground">
              AI-curated cultural discoveries based on your unique taste profile
            </p>
          </div>
          <Button variant="outline">
            View All
            <TrendingUp className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
