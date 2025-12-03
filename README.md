# Personal Finance Tracker - React App

A modern, component-based personal finance tracker built with React, Vite, and TailwindCSS. Track income, expenses, EMIs, and savings with a privacy-first approach.

## 🚀 Features

- **Component-Based Architecture** - Clean, reusable React components
- **Modern Tech Stack** - React 18, Vite, TailwindCSS
- **Privacy-First** - All data stored in browser localStorage
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smart EMI Optimization** - Algorithm to prioritize loan payments
- **Financial Insights** - Visual savings rate and spending analysis

## 📁 Project Structure

```
react-finance-tracker/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx      # Overview cards
│   │   ├── Income.jsx         # Income management
│   │   ├── Expenses.jsx       # Expense tracking
│   │   ├── EMIs.jsx          # EMI management
│   │   ├── Insights.jsx      # Financial insights
│   │   ├── Header.jsx        # App header
│   │   └── TabNavigation.jsx # Tab switcher
│   ├── App.jsx               # Main app component
│   ├── App.css              # Custom styles
│   ├── index.jsx            # Entry point
│   └── index.css            # Tailwind imports
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── .eslintrc.json          # ESLint configuration
```

## 🛠️ Installation

### Prerequisites
- Node.js 16+ and npm 7+ installed
- Git (optional)

### Setup

1. **Clone or download the project**
```bash
# If you have the files locally, navigate to the directory
cd react-finance-tracker

# OR clone from repository
git clone <your-repo-url>
cd react-finance-tracker
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

Follow the prompts to deploy your app.

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy the `dist` folder**
- Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)
- Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json scripts**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

## 🎨 Customization

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

### Add New Features
1. Create a new component in `src/components/`
2. Import and use in `App.jsx`
3. Add new tab in `TabNavigation.jsx` if needed

### Change Currency Options
Edit `src/components/Income.jsx`:

```javascript
const currencies = [
  { code: 'USD', symbol: '$', name: 'USD' },
  // Add more currencies here
];
```

## 🔧 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Recharts** - Charting library (optional)
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📱 Components Overview

### App.jsx
Main component that manages global state and routing between tabs.

### Dashboard.jsx
Displays four key metrics cards with icons from Lucide React.

### Income.jsx
Manages monthly income input and currency selection.

### Expenses.jsx
Handles fixed expenses (rent, remittances) and dynamic expense list.

### EMIs.jsx
Manages loan/EMI entries with full CRUD operations.

### Insights.jsx
Provides financial analysis including:
- Savings rate visualization
- EMI payoff strategy
- Expense breakdown
- Smart alerts

## 🔐 Data Storage

All data is stored in browser localStorage:
- No server or database required
- Data persists between sessions
- Completely private - no data leaves your device

To clear data, use browser developer tools:
```javascript
localStorage.removeItem('financeData');
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change port in vite.config.js
server: {
  port: 3001  // or any available port
}
```

**Dependencies not installing:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Check Node version
node --version  # Should be 16+

# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation

---

Built with ❤️ using React and modern web technologies