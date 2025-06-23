"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Filter,
  Star,
  Download,
  ArrowRight,
  Users,
  Globe,
  TrendingUp,
  Database,
} from "lucide-react";
import Link from "next/link";
import { ChatBot } from "@/components/chat-bot";

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const datasets = [
    {
      id: "1",
      title: "Global E-commerce Consumer Behavior Dataset",
      provider: "DataVendor Corp",
      category: "Consumer Data",
      rating: 4.8,
      reviews: 127,
      records: "2.5M+",
      description:
        "Comprehensive dataset covering global e-commerce consumer behavior patterns and preferences.",
      tags: ["Real-time", "Global", "Verified"],
      featured: true,
    },
    {
      id: "2",
      title: "Financial Market Intelligence Database",
      provider: "FinanceHub",
      category: "Financial Data",
      rating: 4.9,
      reviews: 89,
      records: "1.8M+",
      description:
        "Real-time financial market data with comprehensive analytics and trading insights.",
      tags: ["Real-time", "Premium", "API"],
      featured: true,
    },
    {
      id: "3",
      title: "Healthcare Research Analytics",
      provider: "MedResearch Inc",
      category: "Healthcare Data",
      rating: 4.7,
      reviews: 156,
      records: "950K+",
      description:
        "Clinical research data and pharmaceutical analytics for healthcare professionals.",
      tags: ["HIPAA", "Verified", "Research"],
      featured: false,
    },
    {
      id: "4",
      title: "Social Media Sentiment Analysis",
      provider: "SocialMetrics",
      category: "Social Data",
      rating: 4.6,
      reviews: 203,
      records: "5M+",
      description:
        "Real-time social media sentiment data across major platforms worldwide.",
      tags: ["Social", "Sentiment", "Real-time"],
      featured: false,
    },
    {
      id: "5",
      title: "Global Supply Chain Analytics",
      provider: "LogisticsPro",
      category: "Business Data",
      rating: 4.5,
      reviews: 78,
      records: "1.2M+",
      description:
        "Comprehensive supply chain data covering logistics, shipping, and inventory management.",
      tags: ["Supply Chain", "Logistics", "B2B"],
      featured: false,
    },
    {
      id: "6",
      title: "Real Estate Market Trends",
      provider: "PropData Solutions",
      category: "Real Estate",
      rating: 4.4,
      reviews: 92,
      records: "800K+",
      description:
        "Property prices, market trends, and demographic data for major metropolitan areas.",
      tags: ["Real Estate", "Trends", "Demographics"],
      featured: false,
    },
    {
      id: "7",
      title: "Global Digital Payment Transaction Analytics",
      provider: "FinTech Insights Pro",
      category: "Financial Data",
      rating: 4.9,
      reviews: 234,
      records: "18.5M+",
      description:
        "Comprehensive global digital payment transaction dataset with fraud detection and risk assessment metrics.",
      tags: ["FinTech", "Payments", "Fraud Detection"],
      featured: true,
    },
    {
      id: "8",
      title: "Global B2B Sales Intelligence Database",
      provider: "BizIntel Solutions",
      category: "Business Data",
      rating: 4.7,
      reviews: 189,
      records: "12.3M+",
      description:
        "Comprehensive B2B sales intelligence with verified company profiles and buying intent signals.",
      tags: ["B2B", "Sales Intelligence", "Intent Data"],
      featured: true,
    },
    {
      id: "9",
      title: "Cross-border E-commerce Consumer Behavior Dataset",
      provider: "Global Commerce Analytics",
      category: "Consumer Data",
      rating: 4.8,
      reviews: 312,
      records: "25.7M+",
      description:
        "Advanced cross-border e-commerce consumer behavior dataset with multi-platform tracking.",
      tags: ["E-commerce", "Cross-border", "Multi-platform"],
      featured: true,
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "consumer-data", label: "Consumer Data" },
    { value: "financial-data", label: "Financial Data" },
    { value: "healthcare-data", label: "Healthcare Data" },
    { value: "social-data", label: "Social Data" },
    { value: "business-data", label: "Business Data" },
    { value: "real-estate", label: "Real Estate" },
  ];

  const sortOptions = [
    { value: "popularity", label: "Most Popular" },
    { value: "rating", label: "Highest Rated" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
  ];

  const stats = [
    { label: "Total Datasets", value: "5,000+", icon: Database },
    { label: "Data Providers", value: "150+", icon: Users },
    { label: "Countries Covered", value: "195", icon: Globe },
    { label: "Records Available", value: "50B+", icon: BarChart3 },
  ];

  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearch = dataset.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      dataset.category.toLowerCase().replace(" ", "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Top Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold heading-gradient">
                  Datrix
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/marketplace"
                  className="text-slate-900 font-medium"
                >
                  Browse Data
                </Link>
                <Link
                  href="/categories"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Categories
                </Link>
                <Link
                  href="/providers"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Providers
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="font-medium">
                Sign In
              </Button>
              <Button asChild className="btn-primary font-medium">
                <Link href="/vendor-dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Data Marketplace
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover, analyze, and acquire premium datasets from trusted
            providers worldwide
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search datasets, providers, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-xl"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="lg:w-48 py-3 border-2 border-slate-200 rounded-xl">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="lg:w-48 py-3 border-2 border-slate-200 rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="btn-primary px-8 py-3 text-lg">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-padding">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {filteredDatasets.length} Datasets Found
              </h2>
              <p className="text-slate-700">
                {selectedCategory !== "all" &&
                  `in ${
                    categories.find((c) => c.value === selectedCategory)?.label
                  }`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
          </div>

          {/* Featured Datasets */}
          {filteredDatasets.some((d) => d.featured) && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Featured Datasets
              </h3>
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {filteredDatasets
                  .filter((dataset) => dataset.featured)
                  .map((dataset) => (
                    <Card
                      key={dataset.id}
                      className="card-hover border-0 shadow-md"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-3">
                          <Badge
                            variant="secondary"
                            className="font-medium bg-blue-100 text-blue-800"
                          >
                            Featured
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-semibold text-sm">
                              {dataset.rating}
                            </span>
                            <span className="text-xs text-slate-500">
                              ({dataset.reviews})
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-xl leading-tight">
                          {dataset.title}
                        </CardTitle>
                        <CardDescription className="text-base text-slate-600">
                          by {dataset.provider}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 mb-4 leading-relaxed">
                          {dataset.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {dataset.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <div className="text-sm text-slate-500">
                              Records
                            </div>
                            <div className="font-semibold text-slate-900">
                              {dataset.records}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-500">
                              Pricing
                            </div>
                            <div className="font-semibold text-blue-600">
                              Contact for Quote
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button className="flex-1 btn-primary" asChild>
                            <Link href={`/dataset/${dataset.id}`}>
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                          <Button variant="outline" size="icon">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          )}

          {/* All Datasets */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              All Datasets
            </h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {filteredDatasets.map((dataset) => (
                <Card
                  key={dataset.id}
                  className="card-hover border-0 shadow-md"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="font-medium">
                        {dataset.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold text-sm">
                          {dataset.rating}
                        </span>
                        <span className="text-xs text-slate-500">
                          ({dataset.reviews})
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {dataset.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-600">
                      by {dataset.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 text-sm mb-4 leading-relaxed line-clamp-2">
                      {dataset.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {dataset.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {dataset.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{dataset.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-xs text-slate-500">Records</div>
                        <div className="font-semibold text-sm text-slate-900">
                          {dataset.records}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">Pricing</div>
                        <div className="font-semibold text-blue-600 text-sm">
                          Contact for Quote
                        </div>
                      </div>
                    </div>

                    <Button className="w-full btn-primary" asChild>
                      <Link href={`/dataset/${dataset.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* No Results */}
          {filteredDatasets.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No datasets found
              </h3>
              <p className="text-slate-700 mb-6">
                Try adjusting your search criteria or browse our categories
              </p>
              <Button variant="outline" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

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
