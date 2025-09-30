# Bitcoin Swiss Knife

Your ultimate Bitcoin tools and resources hub - a comprehensive web application providing essential Bitcoin-related utilities in one beautiful, interactive interface.

## 🌐 Live Demo

Visit the live application at: [bitcoinswissknife.net](https://bitcoinswissknife.net)

## ✨ Overview

Bitcoin Swiss Knife is designed as a centralized hub for Bitcoin enthusiasts, developers, and newcomers. The application features a modern, grid-based interface with multiple tools and resources, each represented in an elegant card layout with interactive animations and effects.

## 🛠️ Featured Tools & Resources

### 🛍️ **Shops Accepting BTC**
Find local and online shops that accept Bitcoin and Lightning Network payments worldwide.

### 📚 **Learn Bitcoin**
Master Bitcoin basics with beginner-friendly guides, tutorials, and educational content.

### 💱 **Bitcoin Converter**
Convert any currency to Bitcoin and Satoshi in real-time with up-to-date exchange rates.

### 🤝 **Buy P2P**
Discover trusted platforms for buying Bitcoin peer-to-peer from local sellers safely and securely.

### 🔄 **Privacy Swap**
Swap between Bitcoin and Lightning Network while enhancing your privacy and transaction efficiency.

### 📅 **Bitcoin Calendar**
Track Bitcoin time and discover what year it is since Satoshi's revolutionary creation.

### 🎨 **Design Resources**
Access Bitcoin-themed design assets, logos, icons, and promotional materials for your projects.

### 💝 **Support & Donate**
Learn how to support Bitcoin projects and contribute to the ecosystem's growth.

## 🚀 Getting Started

### Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection for live features

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MaxiKenji/Bitcoin-Swiss-Knife.git
cd Bitcoin-Swiss-Knife
```

2. **Serve locally:**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000

# Or simply open index.html in your browser
```

3. **Access the application:**
Navigate to `http://localhost:8000` or open `index.html` directly.

## 📁 Project Structure

```
Bitcoin-Swiss-Knife/
├── index.html          # Main application interface
├── style.css           # Main stylesheet with design system
├── Style.css           # Alternative/backup stylesheet
├── app.js              # Core JavaScript functionality  
├── App.js              # Alternative JavaScript file
├── CNAME               # Custom domain configuration
├── *.png               # UI assets and screenshots
├── Mask group.png      # Design asset
└── README.md           # This documentation
```

## 🎨 Design & User Experience

### Visual Design
- **Dark Theme**: Sophisticated dark interface with Bitcoin orange accents
- **Neumorphism**: Modern embossed effect with subtle shadows and highlights
- **Responsive Grid**: Adaptive 3x3 grid layout that responds to all screen sizes
- **Smooth Animations**: Fluid transitions and hover effects for enhanced interaction

### Interactive Features
- **Hover Effects**: Dynamic animations with 3D transforms and glowing effects
- **Ripple Animation**: Material Design-inspired button interactions
- **Modal System**: Elegant popup messages for feature announcements
- **Keyboard Navigation**: Full accessibility with tab navigation and keyboard shortcuts

### Color Scheme
- **Primary Orange**: `#F7931A` (Bitcoin Orange)
- **Secondary Yellow**: `#FFCD49` (Gold accent)
- **Background**: `#1E1E1E` (Dark gray)
- **Cards**: `#1C1C1C` (Slightly lighter gray)

## ⚙️ Technical Implementation

### Architecture
- **Vanilla JavaScript**: No dependencies, lightweight and performant
- **CSS Grid**: Modern layout system with responsive breakpoints
- **CSS Custom Properties**: Comprehensive design system with theming support
- **Progressive Enhancement**: Graceful degradation for older browsers

### Key Features
1. **Fallback Icon System**: Automatic Unicode symbols when SVG assets fail to load
2. **Modal Framework**: Reusable popup system with backdrop blur and animations
3. **Event Management**: Efficient event handling with proper cleanup
4. **Performance Optimization**: Debounced resize events and optimized animations

### Browser Support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS/Android)

## 🎯 Responsive Breakpoints

### Desktop (1024px+)
- 3x3 grid layout
- Full hover effects and animations
- Horizontal card layout with icons on the left

### Tablet (768px - 1024px)
- 2-column grid
- Reduced padding and spacing
- Maintained horizontal layout

### Mobile (480px - 768px)
- 2-column grid
- Vertical card layout
- Touch-optimized interactions

### Small Mobile (<480px)
- Single column layout
- Vertical scrolling enabled
- Condensed spacing and typography

## 🚧 Development Status

Currently, the application serves as a beautiful interface and proof-of-concept. Individual tools are planned for implementation:

- ✅ **Interface Design**: Complete
- ✅ **Responsive Layout**: Complete  
- ✅ **Interactive Animations**: Complete
- 🚧 **Bitcoin Calendar**: [Live at bitcoincalendar.net](https://bitcoincalendar.net)
- ⏳ **Currency Converter**: In development
- ⏳ **Shop Directory**: Planned
- ⏳ **Educational Content**: Planned
- ⏳ **P2P Marketplace**: Planned

## 🤝 Contributing

We welcome contributions to make Bitcoin Swiss Knife even better!

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-tool`)
3. **Implement** your feature or tool
4. **Test** thoroughly across devices and browsers
5. **Submit** a Pull Request with detailed description

### Contribution Ideas
- Implement individual tools and calculators
- Add new Bitcoin-related resources
- Improve mobile experience
- Enhance accessibility features
- Create additional themes or customization options
- Add internationalization support

### Development Guidelines
- Follow existing code structure and naming conventions
- Maintain responsive design principles
- Ensure cross-browser compatibility
- Write clean, documented code
- Test on multiple devices and screen sizes

## 📱 Mobile Experience

The application is fully optimized for mobile devices:

- **Touch-Friendly**: Large touch targets and optimized spacing
- **Smooth Scrolling**: Native scrolling behavior on mobile
- **Adaptive Layout**: Content reflows naturally across screen sizes
- **Performance**: Lightweight and fast-loading on mobile networks

## 🔧 Customization

The design system allows for easy customization:

### Color Themes
Modify CSS custom properties in `style.css`:
```css
:root {
  --color-primary: #F7931A;    /* Bitcoin Orange */
  --color-secondary: #FFCD49;  /* Gold accent */
  --color-background: #1E1E1E; /* Dark background */
}
```

### Layout Modifications
Adjust grid system:
```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Bitcoin Community**: For inspiration and continuous innovation
- **Satoshi Nakamoto**: For creating the foundation of our digital future
- **Open Source Contributors**: For tools and libraries that make development possible
- **Design Community**: For UI/UX inspiration and best practices

## 📞 Support & Contact

### Getting Help
- **GitHub Issues**: Report bugs and request features
- **Discussions**: Join community conversations
- **Documentation**: Check this README and inline code comments

### Connect
- **GitHub**: [@MaxiKenji](https://github.com/MaxiKenji)
- **Website**: [bitcoinswissknife.net](https://bitcoinswissknife.net)

## 🚀 Future Roadmap

### Short Term
- Complete individual tool implementations
- Add Bitcoin price tracking integration
- Implement Lightning Network utilities
- Create comprehensive Bitcoin education section

### Long Term
- Mobile app versions (PWA)
- Browser extension
- API for third-party integrations
- Multi-language support
- Advanced Bitcoin analytics tools

---

**Bitcoin Swiss Knife** - *Your complete toolkit for the Bitcoin ecosystem*

*"Be your own bank, be your own developer, be your own future."*