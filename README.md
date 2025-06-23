# Datrix - Data Marketplace Platform

A modern, full-featured data marketplace platform built with Next.js 15, React 19, and TypeScript. Datrix transforms traditional data analysis websites into comprehensive data marketplaces similar to Datarade, featuring AI-powered analysis, intelligent chatbots, and seamless data discovery.

![Datrix Banner](https://via.placeholder.com/1200x400/3B82F6/FFFFFF?text=Datrix+Data+Marketplace)

## ✨ Features

### 🏪 **Data Marketplace**

- **Comprehensive Dataset Catalog**: Browse through curated datasets across multiple categories
- **Advanced Filtering**: Filter by category, provider, data quality, and geographic coverage
- **Detailed Dataset Pages**: Complete information including sample data, data dictionaries, and quality metrics
- **Provider Profiles**: Detailed vendor information and dataset portfolios

### 🤖 **AI-Powered Analysis**

- **Smart AI Assistant**: Claude/ChatGPT-style interface for dataset analysis
- **Interactive Queries**: Ask natural language questions like "Who are the top 5 customers by revenue?"
- **Dynamic Results**: Generate tables, charts, and insights based on user queries
- **Left-Right Layout**: Chat interface on the left, analysis results on the right

### 💬 **Intelligent Chatbot**

- **Global Assistant**: Available across all pages to help users find relevant datasets
- **Smart Matching**: Keyword-based intelligent responses for data discovery
- **Quick Suggestions**: Contextual follow-up questions and recommendations
- **Dataset Recommendations**: Direct links to relevant datasets based on user queries

### 📊 **Rich Data Visualization**

- **Interactive Charts**: Built with Recharts for responsive data visualization
- **Statistical Analysis**: Comprehensive data quality metrics and distribution charts
- **Geographic Coverage**: Visual representation of global data coverage
- **Trend Analysis**: Time-series data with growth patterns and seasonal insights

### 🎨 **Modern UI/UX**

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Themes**: Consistent design system with excellent contrast
- **Smooth Animations**: Polished interactions and transitions
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

## 🛠 Technology Stack

### **Frontend**

- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Recharts** - Composable charting library

### **Components & UI**

- **shadcn/ui** - Beautiful, accessible React components
- **Lucide Icons** - Consistent icon system
- **Custom Components** - Reusable, typed components

### **Features**

- **Server Components** - Optimized rendering with React Server Components
- **Client Components** - Interactive features with proper hydration
- **Dynamic Routing** - File-based routing with dynamic segments
- **SEO Optimized** - Meta tags, structured data, and performance optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/datrix.git
   cd datrix
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
datrix/
├── app/                    # Next.js 15 App Router
│   ├── categories/         # Dataset categories page
│   ├── dataset/[id]/      # Dynamic dataset detail pages
│   ├── marketplace/       # Main marketplace page
│   ├── providers/         # Data provider listings
│   ├── vendor-dashboard/  # Vendor management interface
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── ai-analysis-modal.tsx  # AI analysis interface
│   └── chat-bot.tsx      # Global chatbot component
├── lib/                  # Utility functions and configurations
│   └── sample-datasets.ts # Sample data configurations
└── public/              # Static assets
```

## 🎯 Key Features Walkthrough

### 1. **Homepage**

- Hero section with clear value proposition
- Featured datasets carousel
- Category overview with statistics
- Trusted by section with provider logos

### 2. **Marketplace**

- Grid layout with dataset cards
- Advanced filtering and search
- Sorting options (relevance, date, popularity)
- Pagination for large datasets

### 3. **Dataset Detail Pages**

- Comprehensive dataset information
- Sample data preview with interactive tables
- Data dictionary with field descriptions
- Statistical analysis with charts
- Geographic coverage visualization
- Pricing and licensing information

### 4. **AI Analysis Interface**

- Natural language query processing
- Dynamic result generation
- Interactive tables and charts
- Contextual insights and recommendations

### 5. **Global Chatbot**

- Floating assistant available on all pages
- Intelligent keyword matching
- Dataset recommendations
- Quick action suggestions

## 📊 Sample Datasets

The platform includes three comprehensive sample datasets:

1. **FinTech Data** - Global Digital Payment Transaction Analytics

   - 18.5M+ records across 85 countries
   - Real-time payment processing data
   - Fraud detection and risk analysis

2. **B2B Data** - Global B2B Sales Intelligence Database

   - 12.3M+ records across 195 countries
   - Company profiles and sales data
   - Market intelligence and lead generation

3. **E-commerce Data** - Cross-border Consumer Behavior Dataset
   - 25.7M+ records across 168 countries
   - Purchase patterns and customer analytics
   - Cross-platform tracking and segmentation

## 🤖 AI Analysis Examples

Try these sample queries in the AI Analysis interface:

- **Customer Analysis**: "Who are the top 5 customers by revenue?"
- **Product Performance**: "What are the best performing product categories?"
- **Trend Analysis**: "Show me sales trends over time"
- **Demographics**: "Analyze customer demographics by age group"
- **Geographic**: "What's the revenue distribution by country?"

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#3B82F6) - Trust and reliability
- **Secondary**: Slate (#64748B) - Professional and clean
- **Accent**: Green (#10B981) - Success and growth
- **Warning**: Yellow (#F59E0B) - Attention and alerts
- **Error**: Red (#EF4444) - Errors and critical actions

### Typography

- **Headings**: Inter font family with gradient effects
- **Body**: System font stack for optimal readability
- **Code**: Monospace for technical content

## 📱 Responsive Design

The platform is fully responsive across all device sizes:

- **Desktop** (1200px+): Full-featured experience with sidebar navigation
- **Tablet** (768px - 1199px): Adapted layouts with collapsible elements
- **Mobile** (< 768px): Mobile-first design with touch-friendly interactions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Code Quality

- **TypeScript** - Strict type checking enabled
- **ESLint** - Code linting with Next.js recommended rules
- **Prettier** - Code formatting (configure as needed)
- **Husky** - Git hooks for pre-commit checks (optional)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on every push to main

### Other Platforms

- **Netlify**: Configure build command as `npm run build`
- **AWS Amplify**: Use the default Next.js build settings
- **Docker**: Create a Dockerfile for containerized deployment

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help:

- 📧 Email: support@datrix.com
- 💬 Discord: [Join our community](https://discord.gg/datrix)
- 📚 Documentation: [docs.datrix.com](https://docs.datrix.com)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/datrix/issues)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [Recharts](https://recharts.org/) - A composable charting library
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

---

**Built with ❤️ by the Datrix Team**

_Transform your data into insights with Datrix - the modern data marketplace platform._
