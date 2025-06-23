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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BarChart3,
  Search,
  Star,
  Users,
  Database,
  Globe,
  Award,
  TrendingUp,
  Building,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { ChatBot } from "@/components/chat-bot";

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const providers = [
    {
      id: "datavendor-corp",
      name: "DataVendor Corp",
      logo: "/api/placeholder/80/80",
      description:
        "Leading provider of global consumer behavior and e-commerce analytics data",
      rating: 4.8,
      reviews: 127,
      datasets: 45,
      totalRecords: "2.8B+",
      founded: 2018,
      location: "San Francisco, CA",
      employees: "201-500",
      specialties: ["Consumer Data", "E-commerce", "Retail Analytics"],
      certifications: ["SOC 2", "GDPR", "CCPA"],
      responseTime: "< 2 hours",
      featured: true,
      featuredDatasets: [
        {
          title: "Global E-commerce Consumer Behavior Dataset",
          price: "$2,500/month",
          rating: 4.8,
          records: "2.5M+",
        },
        {
          title: "Social Media Engagement Patterns",
          price: "$1,800/month",
          rating: 4.7,
          records: "1.2M+",
        },
        {
          title: "Mobile Commerce Trends",
          price: "$3,200/month",
          rating: 4.9,
          records: "3.1M+",
        },
      ],
      metrics: {
        dataQuality: 98,
        updateFrequency: "Real-time",
        apiUptime: 99.9,
        customerSatisfaction: 96,
      },
    },
    {
      id: "financehub",
      name: "FinanceHub",
      logo: "/api/placeholder/80/80",
      description:
        "Premier financial data provider with real-time market data and economic indicators",
      rating: 4.9,
      reviews: 89,
      datasets: 32,
      totalRecords: "1.5B+",
      founded: 2015,
      location: "New York, NY",
      employees: "501-1000",
      specialties: ["Financial Data", "Market Data", "Economic Indicators"],
      certifications: ["SOC 2", "ISO 27001", "FCA Regulated"],
      responseTime: "< 1 hour",
      featured: true,
      featuredDatasets: [
        {
          title: "Real-time Stock Market Data",
          price: "$5,000/month",
          rating: 4.9,
          records: "50M+",
        },
        {
          title: "Cryptocurrency Trading Patterns",
          price: "$3,500/month",
          rating: 4.6,
          records: "25M+",
        },
        {
          title: "Global Economic Indicators",
          price: "$4,200/month",
          rating: 4.8,
          records: "100K+",
        },
      ],
      metrics: {
        dataQuality: 99,
        updateFrequency: "Real-time",
        apiUptime: 99.95,
        customerSatisfaction: 98,
      },
    },
    {
      id: "geodata-systems",
      name: "GeoData Systems",
      logo: "/api/placeholder/80/80",
      description:
        "Comprehensive geospatial data and location intelligence solutions",
      rating: 4.7,
      reviews: 156,
      datasets: 28,
      totalRecords: "950M+",
      founded: 2019,
      location: "Seattle, WA",
      employees: "51-200",
      specialties: ["Geographic Data", "Location Intelligence", "Mapping"],
      certifications: ["SOC 2", "GDPR", "Privacy Shield"],
      responseTime: "< 3 hours",
      featured: false,
      featuredDatasets: [
        {
          title: "Global Points of Interest Database",
          price: "$2,800/month",
          rating: 4.7,
          records: "500M+",
        },
        {
          title: "Traffic Flow Analytics",
          price: "$3,800/month",
          rating: 4.5,
          records: "200M+",
        },
        {
          title: "Weather & Climate Data",
          price: "$2,200/month",
          rating: 4.6,
          records: "100M+",
        },
      ],
      metrics: {
        dataQuality: 95,
        updateFrequency: "Daily",
        apiUptime: 99.7,
        customerSatisfaction: 94,
      },
    },
    {
      id: "bizdata-corp",
      name: "BizData Corp",
      logo: "/api/placeholder/80/80",
      description: "B2B data intelligence and company information provider",
      rating: 4.6,
      reviews: 203,
      datasets: 38,
      totalRecords: "680M+",
      founded: 2017,
      location: "Austin, TX",
      employees: "101-500",
      specialties: ["Business Data", "B2B Intelligence", "Company Data"],
      certifications: ["SOC 2", "GDPR", "CCPA"],
      responseTime: "< 4 hours",
      featured: false,
      featuredDatasets: [
        {
          title: "Global Company Database",
          price: "$4,500/month",
          rating: 4.8,
          records: "50M+",
        },
        {
          title: "Industry Classification Data",
          price: "$2,900/month",
          rating: 4.6,
          records: "25M+",
        },
        {
          title: "Executive Contact Information",
          price: "$3,700/month",
          rating: 4.7,
          records: "10M+",
        },
      ],
      metrics: {
        dataQuality: 96,
        updateFrequency: "Weekly",
        apiUptime: 99.5,
        customerSatisfaction: 92,
      },
    },
    {
      id: "medresearch-inc",
      name: "MedResearch Inc",
      logo: "/api/placeholder/80/80",
      description: "Healthcare and pharmaceutical research data specialist",
      rating: 4.9,
      reviews: 67,
      datasets: 24,
      totalRecords: "420M+",
      founded: 2016,
      location: "Boston, MA",
      employees: "201-500",
      specialties: ["Healthcare Data", "Pharmaceutical", "Clinical Research"],
      certifications: ["HIPAA", "SOC 2", "FDA Validated"],
      responseTime: "< 2 hours",
      featured: true,
      featuredDatasets: [
        {
          title: "Clinical Trial Outcomes",
          price: "$6,000/month",
          rating: 4.9,
          records: "5M+",
        },
        {
          title: "Drug Safety Database",
          price: "$5,500/month",
          rating: 4.8,
          records: "2M+",
        },
        {
          title: "Population Health Metrics",
          price: "$4,800/month",
          rating: 4.7,
          records: "100M+",
        },
      ],
      metrics: {
        dataQuality: 99,
        updateFrequency: "Monthly",
        apiUptime: 99.8,
        customerSatisfaction: 97,
      },
    },
    {
      id: "techtrends-inc",
      name: "TechTrends Inc",
      logo: "/api/placeholder/80/80",
      description: "Technology adoption and software usage analytics provider",
      rating: 4.5,
      reviews: 134,
      datasets: 31,
      totalRecords: "580M+",
      founded: 2020,
      location: "Palo Alto, CA",
      employees: "51-200",
      specialties: ["Technology Data", "Software Analytics", "Digital Trends"],
      certifications: ["SOC 2", "GDPR", "Privacy Shield"],
      responseTime: "< 6 hours",
      featured: false,
      featuredDatasets: [
        {
          title: "Software Adoption Trends",
          price: "$3,800/month",
          rating: 4.7,
          records: "200M+",
        },
        {
          title: "API Usage Analytics",
          price: "$2,900/month",
          rating: 4.5,
          records: "150M+",
        },
        {
          title: "Cloud Infrastructure Data",
          price: "$4,200/month",
          rating: 4.8,
          records: "75M+",
        },
      ],
      metrics: {
        dataQuality: 94,
        updateFrequency: "Real-time",
        apiUptime: 99.2,
        customerSatisfaction: 90,
      },
    },
  ];

  const categories = [
    "all",
    "Consumer Data",
    "Financial Data",
    "Geographic Data",
    "Business Data",
    "Healthcare Data",
    "Technology Data",
  ];

  const filteredProviders = providers.filter((provider) => {
    const matchesSearch =
      provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.specialties.some((spec) =>
        spec.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      categoryFilter === "all" || provider.specialties.includes(categoryFilter);

    return matchesSearch && matchesCategory;
  });

  const sortedProviders = [...filteredProviders].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "datasets":
        return b.datasets - a.datasets;
      case "reviews":
        return b.reviews - a.reviews;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const featuredProviders = providers.filter((provider) => provider.featured);

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
                <Link
                  href="/categories"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Categories
                </Link>
                <Link href="/providers" className="text-blue-600 font-medium">
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
            Data Providers
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Discover trusted data providers offering high-quality datasets
            across various industries and use cases.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search providers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="datasets">Most Datasets</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="name">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Featured Providers */}
        {featuredProviders.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Featured Providers
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProviders.map((provider) => (
                <Card
                  key={provider.id}
                  className="border-2 border-blue-200 bg-blue-50/30 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={provider.logo}
                            alt={provider.name}
                          />
                          <AvatarFallback className="bg-blue-600 text-white text-lg font-semibold">
                            {provider.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">
                            {provider.name}
                          </CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-medium">
                                {provider.rating}
                              </span>
                              <span className="text-slate-500 text-sm">
                                ({provider.reviews} reviews)
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600">
                            <div className="flex items-center space-x-1">
                              <Database className="w-4 h-4" />
                              <span>{provider.datasets} datasets</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{provider.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                    <CardDescription className="mt-3">
                      {provider.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-slate-900">
                          {provider.totalRecords}
                        </div>
                        <div className="text-xs text-slate-600">Records</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-slate-900">
                          {provider.metrics.dataQuality}%
                        </div>
                        <div className="text-xs text-slate-600">Quality</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-slate-900">
                          {provider.metrics.apiUptime}%
                        </div>
                        <div className="text-xs text-slate-600">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-slate-900">
                          {provider.responseTime}
                        </div>
                        <div className="text-xs text-slate-600">Response</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-medium text-slate-900">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {provider.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="outline"
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={`/providers/${provider.id}`}>
                        View Provider Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Providers */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              All Providers ({sortedProviders.length})
            </h2>
          </div>

          <div className="grid gap-6">
            {sortedProviders.map((provider) => (
              <Card
                key={provider.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Provider Info */}
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={provider.logo}
                            alt={provider.name}
                          />
                          <AvatarFallback className="bg-slate-600 text-white font-semibold">
                            {provider.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold text-slate-900">
                              {provider.name}
                            </h3>
                            {provider.featured && (
                              <Badge className="bg-blue-600 text-white">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-medium">
                              {provider.rating}
                            </span>
                            <span className="text-slate-500 text-sm">
                              ({provider.reviews} reviews)
                            </span>
                          </div>
                          <p className="text-slate-600 mt-2">
                            {provider.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Database className="w-4 h-4 text-slate-500" />
                          <span>{provider.datasets} datasets</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Globe className="w-4 h-4 text-slate-500" />
                          <span>{provider.totalRecords} records</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <span>{provider.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span>Since {provider.founded}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {provider.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="outline"
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {provider.certifications.map((cert) => (
                          <Badge
                            key={cert}
                            variant="secondary"
                            className="text-xs"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Featured Datasets */}
                    <div className="lg:w-80">
                      <h4 className="font-medium text-slate-900 mb-3">
                        Popular Datasets
                      </h4>
                      <div className="space-y-3">
                        {provider.featuredDatasets
                          .slice(0, 2)
                          .map((dataset, index) => (
                            <div
                              key={index}
                              className="p-3 bg-slate-50 rounded-lg"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="text-sm font-medium text-slate-900 line-clamp-2">
                                  {dataset.title}
                                </h5>
                                <div className="flex items-center space-x-1 ml-2">
                                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                  <span className="text-xs text-slate-600">
                                    {dataset.rating}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center text-xs text-slate-600">
                                <span>{dataset.records} records</span>
                                <span className="font-medium text-slate-900">
                                  {dataset.price}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <Button className="w-full mt-4" variant="outline" asChild>
                        <Link href={`/providers/${provider.id}`}>
                          View All Datasets
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Provider Statistics</CardTitle>
            <CardDescription>
              Overview of our trusted data provider network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {providers.length}
                </div>
                <div className="text-sm text-slate-600">Total Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {(
                    providers.reduce((sum, p) => sum + p.rating, 0) /
                    providers.length
                  ).toFixed(1)}
                </div>
                <div className="text-sm text-slate-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {providers.reduce((sum, p) => sum + p.datasets, 0)}
                </div>
                <div className="text-sm text-slate-600">Total Datasets</div>
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
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Become a Data Provider
            </h3>
            <p className="text-slate-700 mb-4">
              Join our marketplace and monetize your data assets. Reach
              thousands of potential customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Apply as Provider
              </Button>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                Learn More
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
