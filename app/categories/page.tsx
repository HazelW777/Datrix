"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  Search,
  TrendingUp,
  Users,
  Database,
  Globe,
  ShoppingCart,
  Building,
  Heart,
  Car,
  Smartphone,
  Home,
  Briefcase,
  GraduationCap,
  Activity,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { ChatBot } from "@/components/chat-bot";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  const categories = [
    {
      id: "consumer-data",
      name: "Consumer Data",
      icon: Users,
      description: "Consumer behavior, preferences, and demographic insights",
      datasets: 1247,
      providers: 89,
      totalRecords: "2.8B+",
      avgRating: 4.6,
      growth: "+18%",
      color: "bg-blue-500",
      popularDatasets: [
        {
          title: "Global E-commerce Consumer Behavior",
          provider: "DataVendor Corp",
          price: "$2,500/month",
          rating: 4.8,
        },
        {
          title: "Social Media Engagement Patterns",
          provider: "Insight Analytics",
          price: "$1,800/month",
          rating: 4.7,
        },
        {
          title: "Mobile App Usage Statistics",
          provider: "TechData Solutions",
          price: "$3,200/month",
          rating: 4.9,
        },
      ],
    },
    {
      id: "financial-data",
      name: "Financial Data",
      icon: TrendingUp,
      description: "Market data, trading information, and financial analytics",
      datasets: 892,
      providers: 67,
      totalRecords: "1.5B+",
      avgRating: 4.8,
      growth: "+22%",
      color: "bg-green-500",
      popularDatasets: [
        {
          title: "Real-time Stock Market Data",
          provider: "FinanceHub",
          price: "$5,000/month",
          rating: 4.9,
        },
        {
          title: "Cryptocurrency Trading Patterns",
          provider: "CryptoInsights",
          price: "$3,500/month",
          rating: 4.6,
        },
        {
          title: "Global Economic Indicators",
          provider: "EconData Pro",
          price: "$4,200/month",
          rating: 4.8,
        },
      ],
    },
    {
      id: "geographic-data",
      name: "Geographic Data",
      icon: Globe,
      description: "Location intelligence, mapping, and geospatial analytics",
      datasets: 634,
      providers: 45,
      totalRecords: "950M+",
      avgRating: 4.5,
      growth: "+15%",
      color: "bg-purple-500",
      popularDatasets: [
        {
          title: "Global Points of Interest Database",
          provider: "GeoData Systems",
          price: "$2,800/month",
          rating: 4.7,
        },
        {
          title: "Traffic Flow Analytics",
          provider: "Urban Insights",
          price: "$3,800/month",
          rating: 4.5,
        },
        {
          title: "Weather & Climate Data",
          provider: "ClimateTrack",
          price: "$2,200/month",
          rating: 4.6,
        },
      ],
    },
    {
      id: "retail-ecommerce",
      name: "Retail & E-commerce",
      icon: ShoppingCart,
      description: "Sales data, inventory, pricing, and retail analytics",
      datasets: 756,
      providers: 52,
      totalRecords: "1.2B+",
      avgRating: 4.4,
      growth: "+20%",
      color: "bg-orange-500",
      popularDatasets: [
        {
          title: "Product Pricing Intelligence",
          provider: "RetailScope",
          price: "$3,000/month",
          rating: 4.5,
        },
        {
          title: "Inventory Management Data",
          provider: "SupplyChain Pro",
          price: "$2,600/month",
          rating: 4.3,
        },
        {
          title: "Customer Purchase Journey",
          provider: "ShopAnalytics",
          price: "$3,400/month",
          rating: 4.6,
        },
      ],
    },
    {
      id: "business-data",
      name: "Business Data",
      icon: Building,
      description: "Company information, B2B data, and business intelligence",
      datasets: 543,
      providers: 38,
      totalRecords: "680M+",
      avgRating: 4.7,
      growth: "+16%",
      color: "bg-indigo-500",
      popularDatasets: [
        {
          title: "Global Company Database",
          provider: "BizData Corp",
          price: "$4,500/month",
          rating: 4.8,
        },
        {
          title: "Industry Classification Data",
          provider: "SectorInsights",
          price: "$2,900/month",
          rating: 4.6,
        },
        {
          title: "Executive Contact Information",
          provider: "LeadGen Pro",
          price: "$3,700/month",
          rating: 4.7,
        },
      ],
    },
    {
      id: "healthcare-data",
      name: "Healthcare Data",
      icon: Heart,
      description: "Medical research, pharmaceutical, and health analytics",
      datasets: 389,
      providers: 29,
      totalRecords: "420M+",
      avgRating: 4.9,
      growth: "+25%",
      color: "bg-red-500",
      popularDatasets: [
        {
          title: "Clinical Trial Outcomes",
          provider: "MedResearch Inc",
          price: "$6,000/month",
          rating: 4.9,
        },
        {
          title: "Drug Safety Database",
          provider: "PharmaData",
          price: "$5,500/month",
          rating: 4.8,
        },
        {
          title: "Population Health Metrics",
          provider: "HealthStats Pro",
          price: "$4,800/month",
          rating: 4.7,
        },
      ],
    },
    {
      id: "automotive-data",
      name: "Automotive Data",
      icon: Car,
      description: "Vehicle data, transportation, and mobility analytics",
      datasets: 267,
      providers: 21,
      totalRecords: "310M+",
      avgRating: 4.3,
      growth: "+19%",
      color: "bg-gray-500",
      popularDatasets: [
        {
          title: "Vehicle Registration Database",
          provider: "AutoData Solutions",
          price: "$3,200/month",
          rating: 4.4,
        },
        {
          title: "Traffic Accident Statistics",
          provider: "SafetyFirst Data",
          price: "$2,800/month",
          rating: 4.2,
        },
        {
          title: "Electric Vehicle Adoption",
          provider: "GreenMobility",
          price: "$3,600/month",
          rating: 4.5,
        },
      ],
    },
    {
      id: "technology-data",
      name: "Technology Data",
      icon: Smartphone,
      description: "Tech trends, software usage, and digital transformation",
      datasets: 445,
      providers: 34,
      totalRecords: "580M+",
      avgRating: 4.6,
      growth: "+28%",
      color: "bg-cyan-500",
      popularDatasets: [
        {
          title: "Software Adoption Trends",
          provider: "TechTrends Inc",
          price: "$3,800/month",
          rating: 4.7,
        },
        {
          title: "API Usage Analytics",
          provider: "DevInsights",
          price: "$2,900/month",
          rating: 4.5,
        },
        {
          title: "Cloud Infrastructure Data",
          provider: "CloudMetrics",
          price: "$4,200/month",
          rating: 4.8,
        },
      ],
    },
  ];

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case "popularity":
        return b.datasets - a.datasets;
      case "rating":
        return b.avgRating - a.avgRating;
      case "growth":
        return (
          parseFloat(b.growth.replace("%", "")) -
          parseFloat(a.growth.replace("%", ""))
        );
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">Datrix</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-slate-600 hover:text-slate-900">
                  Home
                </Link>
                <Link
                  href="/marketplace"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Browse Data
                </Link>
                <Link href="/categories" className="text-blue-600 font-medium">
                  Categories
                </Link>
                <Link
                  href="/providers"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Providers
                </Link>
                <Link
                  href="/insights"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Insights
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/vendor-dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Data Categories
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Explore datasets organized by industry and data type. Find the
            perfect data for your specific use case.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="growth">Fastest Growing</SelectItem>
                <SelectItem value="name">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {category.name}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {category.datasets} datasets
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {category.providers} providers
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-200 bg-green-50"
                    >
                      {category.growth}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-slate-900">
                        {category.totalRecords}
                      </div>
                      <div className="text-xs text-slate-600">Records</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-lg font-semibold text-slate-900">
                          {category.avgRating}
                        </span>
                      </div>
                      <div className="text-xs text-slate-600">Avg Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-slate-900">
                        {category.providers}
                      </div>
                      <div className="text-xs text-slate-600">Providers</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-900">
                      Popular Datasets:
                    </h4>
                    {category.popularDatasets
                      .slice(0, 2)
                      .map((dataset, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center text-xs"
                        >
                          <span className="text-slate-600 truncate flex-1 mr-2">
                            {dataset.title}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-slate-500">
                              {dataset.rating}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link href={`/marketplace?category=${category.id}`}>
                      Explore Category
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Category Statistics</CardTitle>
            <CardDescription>
              Overview of data availability across all categories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {categories.length}
                </div>
                <div className="text-sm text-slate-600">Total Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {categories
                    .reduce((sum, cat) => sum + cat.datasets, 0)
                    .toLocaleString()}
                </div>
                <div className="text-sm text-slate-600">Total Datasets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {categories.reduce((sum, cat) => sum + cat.providers, 0)}
                </div>
                <div className="text-sm text-slate-600">Data Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  8.5B+
                </div>
                <div className="text-sm text-slate-600">Total Records</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Can't find the data you're looking for?
            </h3>
            <p className="text-blue-700 mb-4">
              Our team can help you find custom datasets or connect you with
              specialized data providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Request Custom Data
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                Contact Sales Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Datrix</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The world's leading data marketplace for businesses and
                researchers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link
                    href="/marketplace"
                    className="hover:text-white transition-colors"
                  >
                    Browse Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="hover:text-white transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/providers"
                    className="hover:text-white transition-colors"
                  >
                    Providers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="hover:text-white transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Datrix. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
}
