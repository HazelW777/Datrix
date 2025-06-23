# Datrix - AI-Powered Data Marketplace

A modern, intelligent data marketplace platform built with Next.js 15, React 19, and TypeScript. Datrix provides a comprehensive solution for buying, selling, and analyzing datasets with integrated AI-powered insights.

![Datrix Platform](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

### 📊 **Data Marketplace**

- **Browse Datasets**: Explore diverse datasets across multiple categories
- **Detailed Dataset Pages**: Comprehensive information with sample data, data dictionary, and quality metrics
- **Vendor Dashboard**: Tools for data providers to manage and showcase their datasets
- **Category & Provider Pages**: Organized browsing experience

### 🤖 **AI-Powered Analysis**

- **Intelligent Chatbot**: Global assistant to help users find relevant datasets
- **AI Analysis Modal**: Advanced data analysis with Claude/ChatGPT-style interface
- **Dynamic Insights**: Generate tables, charts, and analysis based on user queries
- **Real-time Analysis**: Interactive left-right layout for continuous data exploration

### 🎨 **Modern UI/UX**

- **Responsive Design**: Optimized for all devices and screen sizes
- **Beautiful Interface**: Modern design with gradient backgrounds and smooth animations
- **Interactive Elements**: Hover effects, loading states, and intuitive navigation
- **Accessibility**: WCAG compliant with proper contrast and keyboard navigation

### 📈 **Data Visualization**

- **Sample Data Tables**: Interactive data previews with proper formatting
- **Statistical Charts**: Recharts integration for data visualization
- **Quality Metrics**: Data completeness, accuracy, and consistency indicators
- **Geographic Coverage**: Global data distribution visualization

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React icons
- **State Management**: React Hooks
- **Development**: ESLint, Prettier

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/datrix.git
   cd datrix
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage Examples

### Dataset Browsing

1. Visit the marketplace page to browse available datasets
2. Use filters to find specific categories or providers
3. Click on any dataset to view detailed information

### AI Analysis

1. Open any dataset detail page
2. Click the "AI Analysis" button
3. Ask questions like:
   - "Who are the top 5 customers by revenue?"
   - "What are the most popular product categories?"
   - "Show me sales trends over time"
   - "Analyze customer demographics"

### Chatbot Assistant

1. Look for the blue chat button in the bottom-right corner
2. Ask for help finding datasets or understanding pricing
3. Get personalized recommendations based on your needs

## 📁 Project Structure

```
datrix/
├── app/                    # Next.js App Router pages
│   ├── dataset/[id]/      # Dataset detail pages
│   ├── marketplace/       # Main marketplace page
│   ├── categories/        # Category browsing
│   ├── providers/         # Provider pages
│   └── vendor-dashboard/  # Vendor management
├── components/            # Reusable React components
│   ├── chat-bot.tsx      # Global chatbot assistant
│   ├── ai-analysis-modal.tsx # AI analysis interface
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions and data
│   └── sample-datasets.ts # Sample dataset configurations
├── public/               # Static assets
└── styles/               # Global styles and CSS
```

## 🎨 Key Components

### ChatBot Component

- **Location**: `components/chat-bot.tsx`
- **Features**:
  - Intelligent keyword matching
  - Dataset recommendations
  - Quick suggestion buttons
  - Hidden on dataset detail pages

### AI Analysis Modal

- **Location**: `components/ai-analysis-modal.tsx`
- **Features**:
  - Left-right layout design
  - Dynamic analysis generation
  - Interactive result tables
  - Real-time data processing

### Sample Datasets

- **Location**: `lib/sample-datasets.ts`
- **Includes**:
  - FinTech transaction data
  - B2B sales intelligence
  - E-commerce consumer behavior
  - Comprehensive data dictionaries

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Customization

- **Colors**: Modify `app/globals.css` for theme customization
- **Data**: Update `lib/sample-datasets.ts` to add new datasets
- **Components**: Extend components in the `components/` directory

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables will be automatically configured

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Recharts](https://recharts.org/) for data visualization
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Support

For support, email support@datrix.com or create an issue in this repository.

---

**Built with ❤️ by the Datrix Team**
