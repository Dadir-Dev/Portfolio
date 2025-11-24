# Abdikadir Mohammed - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a frontend developer. Built with clean code, smooth animations, and a professional design.

![Portfolio Preview](/assets/portfolio-preview.png)

## 🚀 Live Demo

[**View Live Portfolio**](https://your-portfolio-link.com)

## ✨ Features

- **Modern Design** - Clean, professional layout with gradient accents
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - CSS animations and scroll-triggered effects
- **Interactive Elements** - Hover effects, particle background, and dynamic project cards
- **Performance Optimized** - Fast loading times and efficient code
- **Accessibility** - WCAG compliant with proper semantic HTML

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup and modern structure
- **CSS3** - Custom properties, Flexbox, Grid, and animations
- **JavaScript (ES6+)** - Dynamic functionality and interactivity

### Libraries & Tools

- **Particles.js** - Interactive background animation
- **Font Awesome** - Professional icons
- **Google Fonts** - Poppins typography
- **Git & GitHub** - Version control and deployment

## 📂 Project Structure

```
portfolio/
├── index.html
├── css/
│   ├── styles.css
│   └── variables.css
├── script.js
│
├── assets/
│   ├── logo.png
│   ├── profile.jpg
│   └── project1.png
└── README.md
```

## 🎯 Key Sections

### 1. Hero Section

- Professional introduction
- Call-to-action buttons
- Floating animation elements

### 2. About Me

- Personal background and skills
- Technology stack display
- Professional photo

### 3. Projects

- Dynamic project cards
- Live demo and GitHub links
- Technology tags
- Hover effects and overlays

### 4. Contact

- Contact information
- Functional contact form
- Social media links

### 5. Footer

- Professional branding
- Social media integration
- Copyright information

## 🚀 Installation & Setup

### Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/Dadir-Dev/portfolio.git
   cd portfolio

   ```

2. **Open `index.html` in your browser**
   You can simply double-click the `index.html` file or use a live server extension for better development experience.

## 🎨 Customization

1. **Color Scheme**

   - Modify CSS variables in `css/variables.css` to change primary and secondary colors.

     ```css
     :root {
       --primary-color: #6c63ff;
       --secondary-color: #ff6584;
       --accent-color: #00d9ff;
       /* Update these values to change the color scheme */
     }
     ```

2. **Content**

   - Replace placeholder text and images with your own content.

     ```javascript
     const projectsData = [
       {
         id: 4,
         title: "Your Project Name",
         description: "Project description...",
         image: "/assets/your-project-image.png",
         tags: ["HTML", "CSS", "JavaScript"],
         liveDemo: "https://your-live-demo.com",
         githubLink: "https://github.com/your-repo",
       },
       // Add more projects here...
     ];
     ```

3. **Particles Background**

   - Customize particles.js configuration in `script.js` to change background animation.

     ```javascript
     particlesJS("particles-js", {
       particles: {
         number: { value: 80 }, // Adjust particle count
         color: { value: ["#your-color-1", "#your-color-2"] },
         // ... other configurations
       },
     });
     ```

## 📱 Responsive Design

The portfolio is optimized for:

- Mobile: 400px - 768px

- Tablet: 768px - 992px

- Desktop: 1200px and above

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

- Fork the project

- Create your feature branch (git checkout -b feature/AmazingFeature)

- Commit your changes (git commit -m 'Add some AmazingFeature')

- Push to the branch (git push origin feature/AmazingFeature)

- Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.
