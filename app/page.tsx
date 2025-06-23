"use client";

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
  BarChart3,
  Search,
  TrendingUp,
  Users,
  Database,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";
import { ChatBot } from "@/components/chat-bot";

export default function HomePage() {
  const featuredDatasets = [
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
    },
  ];

  const categories = [
    {
      name: "Consumer Data",
      icon: Users,
      count: "1,247 datasets",
      color: "bg-blue-500",
    },
    {
      name: "Financial Data",
      icon: TrendingUp,
      count: "892 datasets",
      color: "bg-green-500",
    },
    {
      name: "Geographic Data",
      icon: Globe,
      count: "634 datasets",
      color: "bg-purple-500",
    },
    {
      name: "Business Data",
      icon: Database,
      count: "543 datasets",
      color: "bg-orange-500",
    },
  ];

  const stats = [
    { label: "Total Datasets", value: "5,000+", icon: Database },
    { label: "Data Providers", value: "150+", icon: Users },
    { label: "Countries Covered", value: "195", icon: Globe },
    { label: "Records Available", value: "50B+", icon: BarChart3 },
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2, GDPR, and CCPA compliant data handling",
    },
    {
      icon: Zap,
      title: "Real-time Access",
      description: "Live data feeds and instant API responses",
    },
    {
      icon: Target,
      title: "Quality Assured",
      description: "Verified data sources with quality guarantees",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
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
                <Link href="/" className="text-slate-900 font-medium">
                  Home
                </Link>
                <Link
                  href="/marketplace"
                  className="text-slate-700 hover:text-slate-900 transition-colors"
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
      <section className="container-padding">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-gradient mb-6">
              Discover Premium Data
              <br />
              <span className="text-blue-600">for Your Business</span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Access high-quality datasets from trusted providers worldwide.
              Find the perfect data to power your analytics, research, and
              business intelligence.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search for datasets, categories, or providers..."
                  className="pl-12 pr-4 py-4 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-xl shadow-sm"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="btn-primary text-lg px-8 py-4"
              >
                <Link href="/marketplace">
                  Explore Datasets
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card
                  key={stat.label}
                  className="text-center card-hover border-0 shadow-md"
                >
                  <CardContent className="card-padding">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Datasets */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold heading-gradient mb-4">
              Featured Datasets
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Discover our most popular and highest-rated datasets across
              various industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDatasets.map((dataset) => (
              <Card key={dataset.id} className="card-hover border-0 shadow-md">
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
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-slate-500">Records</div>
                      <div className="font-semibold text-slate-900">
                        {dataset.records}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">Pricing</div>
                      <div className="font-semibold text-blue-600">
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

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8"
            >
              <Link href="/marketplace">
                View All Datasets
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold heading-gradient mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Explore datasets organized by industry and data type
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.name}
                  href={`/marketplace?category=${category.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <Card className="card-hover border-0 shadow-md">
                    <CardContent className="card-padding text-center">
                      <div
                        className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 font-medium">
                        {category.count}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold heading-gradient mb-4">
              Why Choose Datrix?
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              We provide enterprise-grade data solutions with unmatched quality
              and reliability
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="border-0 shadow-md text-center"
                >
                  <CardContent className="card-padding">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of businesses already using Datrix to power their
            data-driven decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4 font-medium"
              asChild
            >
              <Link href="/marketplace">Start Exploring</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-medium"
              asChild
            >
              <Link href="/vendor-dashboard">Become a Provider</Link>
            </Button>
          </div>
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
