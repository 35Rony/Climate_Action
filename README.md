# 🌍 Climate Action Now - SDG 13 Website

A comprehensive, interactive website dedicated to raising awareness about **UN Sustainable Development Goal 13: Climate Action**. This multi-page website educates visitors about climate change causes, effects, and solutions while providing interactive tools to calculate carbon footprints and take meaningful action.

![Climate Action](https://img.shields.io/badge/SDG-13%20Climate%20Action-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Interactive Features](#interactive-features)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

---

## ✨ Features

- 🎨 **Modern, Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🌊 **Smooth Animations** - Beautiful scroll-based animations using AOS library
- 📱 **Mobile-First Approach** - Fully responsive navigation with hamburger menu
- 🧮 **CO2 Calculator** - Interactive tool to calculate personal carbon footprint
- ⏱️ **Live Countdown Timer** - Real-time countdown to Earth Hour 2025
- 🖼️ **Interactive Gallery** - Before/after sliders showing climate change impacts
- 📝 **Contact Form** - Get involved and take action
- ♿ **Accessible** - Semantic HTML and keyboard navigation support

---

## 📄 Pages

### 1. **Home Page** (`index.html`)
- Hero section with compelling climate action message
- SDG 13 introduction and explanation
- Climate statistics dashboard
- Call-to-action buttons

### 2. **About Climate Change** (`about.html`)
- **Causes**: Fossil fuels, deforestation, industrial processes, agriculture
- **Effects**: Rising temperatures, melting ice, extreme weather, biodiversity loss
- **Solutions**: Renewable energy, sustainable transport, reforestation, policy changes
- Scroll-triggered animations for each section

### 3. **CO2 Emission Calculator** (`calculator.html`)
- Input fields for:
  - Daily travel distance
  - Mode of transport
  - Electricity usage
  - Diet type
  - Waste management
- Real-time CO2 calculations
- Personalized reduction suggestions
- Yearly emission projections

### 4. **Earth Hour Countdown** (`countdown.html`)
- Live countdown to Earth Hour 2025 (March 29, 2025)
- Dynamic motivational messages
- Information about the Earth Hour movement
- Call-to-action to pledge support

### 5. **Climate Impact Gallery** (`gallery.html`)
- 6 interactive before/after comparison sliders:
  - Arctic ice melting
  - Amazon deforestation
  - Glacier retreat
  - Lake Chad drought
  - Coral reef bleaching
  - Coastal flooding
- Drag-to-compare functionality
- Touch support for mobile devices

### 6. **Take Action** (`contact.html`)
- Contact form for getting involved
- 8 practical individual actions:
  - Switch to renewable energy
  - Reduce, reuse, recycle
  - Use sustainable transport
  - Plant trees
  - Eat sustainably
  - Choose sustainable fashion
  - Spread awareness
  - Support climate policies

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality

### External Libraries
- **[Font Awesome 6.4.0](https://fontawesome.com/)** - Icons
- **[Google Fonts (Poppins)](https://fonts.google.com/)** - Typography
- **[AOS (Animate On Scroll) 2.3.4](https://michalsnik.github.io/aos/)** - Scroll animations

### Design Features
- CSS Grid & Flexbox layouts
- CSS animations and transitions
- Responsive media queries
- CSS variables for theming
- Backdrop filters and glassmorphism

---

## 📥 Installation

### Option 1: Direct Download

1. **Download all files** to your local machine
2. **Create a project folder** (e.g., `climate-action-website`)
3. **Place all files in the same directory**:
   ```
   climate-action-website/
   ├── index.html
   ├── about.html
   ├── calculator.html
   ├── countdown.html
   ├── gallery.html
   ├── contact.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```
4. **Open `index.html`** in your web browser

### Option 2: Clone Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/climate-action-sdg13.git

# Navigate to the project directory
cd climate-action-sdg13

# Open in your default browser
open index.html  # MacOS
start index.html # Windows
xdg-open index.html # Linux
```

### Option 3: Live Server (Recommended for Development)

If using VS Code:

1. Install the **Live Server** extension
2. Right-click on `index.html`
3. Select **"Open with Live Server"**

---

## 📁 File Structure

```
climate-action-website/
│
├── index.html          # Home page with SDG 13 introduction
├── about.html          # Climate change causes, effects, solutions
├── calculator.html     # CO2 emission calculator
├── countdown.html      # Earth Hour 2025 countdown
├── gallery.html        # Before/after climate impact gallery
├── contact.html        # Contact form and action items
│
├── styles.css          # All styling for the website
├── script.js           # JavaScript functionality
│
└── README.md           # Project documentation
```

---

## 🎯 Usage

### Navigation
- Use the **top navigation bar** to move between pages
- On mobile, click the **hamburger menu** icon (☰) to access navigation
- The **active page** is highlighted in the navigation

### CO2 Calculator
1. Navigate to the **Calculator** page
2. Enter your daily information:
   - Travel distance in kilometers
   - Select your mode of transport
   - Enter daily electricity usage in kWh
   - Select your diet type
   - Choose your recycling habits
3. Click **"Calculate My Footprint"**
4. View your daily and yearly CO2 emissions
5. Read personalized suggestions to reduce your footprint

### Gallery Sliders
1. Navigate to the **Gallery** page
2. **Drag the white handle** left or right to compare before/after images
3. On mobile, **touch and drag** the handle
4. Observe the dramatic effects of climate change

### Countdown Timer
- The countdown automatically updates every second
- Shows days, hours, minutes, and seconds until Earth Hour 2025
- Displays motivational messages based on time remaining

---

## 🎮 Interactive Features

### Scroll Animations
- Elements fade in and slide up as you scroll
- Powered by the AOS library
- Enhances user engagement and visual appeal

### Mobile Menu
- Hamburger icon (☰) appears on screens below 768px
- Smooth slide-in animation
- Transforms to close icon (✕) when active

### Form Validation
- All form fields have proper HTML5 validation
- Visual feedback on form submission
- Simulated submission with success message

### Hover Effects
- Navigation links have animated underlines
- Cards lift up on hover
- Buttons have smooth transitions
- Action items slide right on hover

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Opera | 76+ | ✅ Fully Supported |

### Requirements
- JavaScript enabled
- Modern browser with CSS Grid and Flexbox support
- Internet connection (for external libraries)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Ideas for Contributions
- Add real climate data API integration
- Implement backend for contact form
- Add more languages (i18n)
- Create additional calculators (water footprint, etc.)
- Improve accessibility features
- Add more gallery comparisons with actual images

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Climate Action Now

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 👏 Credits

### Design & Development
- Website created as an educational project for SDG 13 awareness
- Design inspired by modern web design trends and sustainability principles

### Resources
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Fonts**: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- **Animations**: [AOS Library](https://michalsnik.github.io/aos/)
- **Climate Data**: Based on research from IPCC, NASA, and NOAA

### Acknowledgments
- United Nations Sustainable Development Goals
- World Wildlife Fund (WWF) for Earth Hour initiative
- Climate scientists and researchers worldwide
- Open-source community

---

## 📞 Contact

For questions, suggestions, or collaboration:

- 
- **Email**: ronynyakwaka@gmail.com
- 

---

## 🌱 Call to Action

> "The climate crisis has already been solved. We already have the facts and solutions. All we have to do is wake up and change." 
> — Greta Thunberg

Visit the website, calculate your carbon footprint, and join millions in taking action for our planet. **Every action counts!**

---


**Made with 💚 for Planet Earth**
