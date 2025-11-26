# 🚀 Akash Mahendra Yadav - Portfolio Website

A modern, premium portfolio website showcasing my skills as a **Full Stack Developer & ML/AI Engineer**. Built with cutting-edge technologies and featuring stunning animations, glass morphism design, and a fully functional contact system.

![Portfolio Preview](https://personal-portfolio-k3vmggtht-akash-yadavs-projects-ee4a1767.vercel.app/)

## 🎯 **Purpose**

This portfolio website serves as:

- **Professional showcase** of my development skills and projects
- **Contact platform** for potential employers and clients
- **Interactive demonstration** of modern web development techniques
- **Personal brand** representation in the tech industry

## 🛠️ **Tech Stack**

### **Frontend Framework**

- **React 18** - Modern component-based architecture
- **Vite** - Lightning-fast development and build tool
- **JavaScript (ES6+)** - Modern JavaScript features

### **Styling & Design**

- **CSS3** - Custom animations, Grid, Flexbox
- **Glass Morphism** - Modern frosted glass design language
- **Google Fonts** - Inter, Playfair Display, Space Grotesk
- **Responsive Design** - Mobile-first approach

### **Email Integration**

- **EmailJS** - Client-side email service
- **Custom Email Templates** - Professional HTML templates

### **Features & Animations**

- **Intersection Observer API** - Scroll-triggered animations
- **CSS Keyframes** - Smooth premium animations
- **SVG Graphics** - Custom icons and illustrations
- **Particle System** - Animated background particles

### **Development Tools**

- **Node.js** - Runtime environment
- **npm** - Package management
- **ESLint** - Code linting and formatting
- **Git** - Version control

## 📋 **Setup Instructions**

### **Prerequisites**

- **Node.js** (v20.19+ or v22.12+)
- **npm** or **yarn**
- **Git**

### **Installation Steps**

1. **Clone the repository**

```bash
git clone https://github.com/Akash7016/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up EmailJS (for contact form)**

```bash
# Create .env file
cp .env.example .env

# Add your EmailJS credentials to .env:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start development server**

```bash
npm run dev
```

5. **Open browser**
   Navigate to `http://localhost:5173`

### **Build for Production**

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### **EmailJS Setup Guide**

Follow the detailed setup instructions in [`EmailJS-Setup-Guide.md`](./EmailJS-Setup-Guide.md) to enable the contact form.

## 🌟 **Key Features**

### **🎨 Premium UI/UX**

- **Glass morphism design** throughout
- **3D hover animations** and transformations
- **Particle animation system** with floating elements
- **Premium color gradients** (Gold, Coral, Teal)
- **Smooth scroll animations** with Intersection Observer

### **📱 Responsive Design**

- **Mobile-first approach** for all devices
- **Tablet optimization** with adapted layouts
- **Desktop enhancement** with advanced animations
- **Cross-browser compatibility**

### **🚀 Performance Optimized**

- **Vite build system** for fast loading
- **Optimized animations** with CSS transforms
- **Lazy loading** for smooth performance
- **Compressed assets** and efficient code splitting

### **📧 Functional Contact Form**

- **Real email delivery** via EmailJS
- **Form validation** and error handling
- **Success/error feedback** with animations
- **Professional email templates**

## 📂 **Project Structure**

```
src/
├── components/
│   ├── Header.jsx & Header.css     # Navigation with glass morphism
│   ├── Hero.jsx & Hero.css         # Landing section with animations
│   ├── Projects.jsx & Projects.css # Portfolio showcase
│   ├── Contact.jsx & Contact.css   # Contact form with EmailJS
│   └── Footer.jsx & Footer.css     # Footer with social links
├── App.jsx & App.css               # Main application component
├── index.css                       # Global styles and variables
└── main.jsx                        # Application entry point

public/
├── index.html                      # HTML template
└── vite.svg                        # Vite logo

docs/
├── EmailJS-Setup-Guide.md          # EmailJS configuration guide
├── EmailJS-Template.md             # Email template setup
└── Gmail-Error-Fix.md              # Troubleshooting guide
```

## 🌐 **Live Demo**

**🔗 Deployed Website:** [https://person-portfolio.com/](https://personal-portfolio-k3vmggtht-akash-yadavs-projects-ee4a1767.vercel.app/)

_Note: Replace with your actual deployment URL once hosted_

### **Deployment Platforms**

This project is optimized for deployment on:

- **Netlify** (Recommended - includes form handling)
- **Vercel** (Fast deployment with GitHub integration)
- **GitHub Pages** (Free hosting option)
- **AWS S3 + CloudFront** (Enterprise solution)

## 🎯 **Sections Overview**

### **🏠 Hero Section**

- **Personal introduction** with animated typewriter effect
- **Professional statistics** with glass morphism cards
- **Animated code editor illustration** representing developer identity
- **Call-to-action buttons** with premium hover effects

### **💼 Projects Showcase**

- **MLFlowX** - Scalable ML/AI Platform Infrastructure
- **EasyFlow-Bank** - SaaS Banking Platform
- **Creator Agent** - AI Video Script Generator
- **3D hover effects** and animated project cards

### **📞 Contact Section**

- **Functional contact form** with EmailJS integration
- **Contact information** with location and phone
- **Social media links** (GitHub, LinkedIn, Dribbble)
- **Professional email templates** for inquiries

## 🔧 **Customization Guide**

### **Personal Information**

Update personal details in:

- `src/components/Hero.jsx` - Name, title, bio, statistics
- `src/components/Contact.jsx` - Email, phone, location
- `src/components/Projects.jsx` - Project details and links

### **Styling & Branding**

Customize colors and branding in:

- `src/index.css` - CSS custom properties for colors
- Component CSS files - Individual component styling

### **Content Management**

- **Projects**: Update project data in `Projects.jsx`
- **Skills**: Modify technology stacks in project descriptions
- **Social Links**: Update URLs in `Contact.jsx`

## 📈 **Performance Metrics**

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **About the Developer**

**Akash Mahendra Yadav**

- 🎓 **Student** - Lambton College, Ottawa (Full Stack Development)
- 💼 **Frontend Developer** - Hatching, Ottawa
- 🔧 **Specialization** - Full Stack Development, ML/AI Engineering
- 📧 **Contact** - akashmahendra558@gmail.com
- 📱 **Phone** - +1 (343) 558-1637

### **Connect with Me**

- 🐙 **GitHub** - [github.com/Akash7016](https://github.com/Akash7016/)
- 💼 **LinkedIn** - [linkedin.com/in/akash-yadav-591499231](https://www.linkedin.com/in/akash-yadav-591499231)
- 🎨 **Dribbble** - [dribbble.com/Akash1110](https://dribbble.com/Akash1110)

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Built with ❤️ by [Akash Mahendra Yadav](https://github.com/Akash7016)
