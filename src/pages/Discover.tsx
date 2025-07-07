import { useState } from "react";
import Navigation from "@/components/Navigation";
import RecommendationCard from "@/components/RecommendationCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Star, Heart, TrendingUp, Grid2X2 } from "lucide-react";

const Discover = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Categories", count: 847 },
    { id: "film", label: "Film & Cinema", count: 156 },
    { id: "music", label: "Music", count: 234 },
    { id: "literature", label: "Literature", count: 89 },
    { id: "art", label: "Visual Arts", count: 145 },
    { id: "design", label: "Design", count: 223 }
  ];

  const discoveries = [
    {
      title: "Hidden Japanese Cinema Gems",
      description: "Discover underground films that match your aesthetic sensibilities and narrative preferences from emerging directors.",
      category: "Film",
      rating: 4.8,
      trending: true,
      image: "https://images.unsplash.com/photo-1489599510096-3d9dd652b1b5?w=400&h=300&fit=crop",
      tags: ["Minimalist", "Contemplative", "Artistic"]
    },
    {
      title: "Neo-Soul & Jazz Fusion Collection",
      description: "AI-curated playlist based on your recent listening patterns and emotional resonance data analysis.",
      category: "Music",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["Soulful", "Innovative", "Emotional"]
    },
    {
      title: "Scandinavian Design Philosophy",
      description: "Architectural and design philosophy books that align perfectly with your minimalist aesthetic preferences.",
      category: "Literature",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      tags: ["Minimalist", "Functional", "Aesthetic"]
    },
    {
      title: "Contemporary Abstract Expressionism",
      description: "Emerging artists whose work resonates with your preference for bold, emotional visual statements.",
      category: "Art",
      rating: 4.6,
      trending: true,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      tags: ["Bold", "Emotional", "Contemporary"]
    },
    {
      title: "Sustainable Fashion Movement",
      description: "Eco-conscious designers creating beautiful, functional pieces that match your values and style.",
      category: "Design",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      tags: ["Sustainable", "Innovative", "Ethical"]
    },
    {
      title: "Ambient Electronic Soundscapes",
      description: "Atmospheric electronic music that perfectly complements your focus sessions and creative work.",
      category: "Music",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=300&fit=crop",
      tags: ["Ambient", "Electronic", "Meditative"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-24 md:pb-8">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              <span className="gradient-text">Discover</span> Culture
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered cultural discoveries tailored to your unique taste profile and emerging preferences
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search cultural discoveries..."
                  className="pl-10 glass-card border-0 bg-white/5"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "glass"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="glass-card text-center p-6">
              <Star className="w-8 h-8 text-accent-amber mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </Card>
            
            <Card className="glass-card text-center p-6">
              <Heart className="w-8 h-8 text-accent-rose mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">847</div>
              <div className="text-sm text-muted-foreground">Saved Items</div>
            </Card>
            
            <Card className="glass-card text-center p-6">
              <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">23</div>
              <div className="text-sm text-muted-foreground">Trending</div>
            </Card>
            
            <Card className="glass-card text-center p-6">
              <Grid2X2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </Card>
          </div>

          {/* Trending Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Trending Discoveries
                </h2>
                <p className="text-muted-foreground">
                  Popular cultural finds among users with similar taste profiles
                </p>
              </div>
              <Badge className="bg-accent-amber/20 text-accent-amber border-accent-amber/30">
                <TrendingUp className="w-3 h-3 mr-1" />
                Hot Right Now
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discoveries.filter(d => d.trending).map((discovery, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <RecommendationCard {...discovery} />
                </div>
              ))}
            </div>
          </div>

          {/* All Discoveries */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Personalized Discoveries
                </h2>
                <p className="text-muted-foreground">
                  Curated based on your taste evolution and preference patterns
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Sort
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discoveries.map((discovery, index) => (
                <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <RecommendationCard {...discovery} />
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover-lift">
              Load More Discoveries
              <TrendingUp className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;