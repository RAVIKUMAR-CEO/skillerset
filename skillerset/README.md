# SkillersET Learning Platform

A comprehensive online learning platform for programming and software development, similar to GeeksforGeeks and W3Schools.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Interactive Code Editor**: Monaco Editor integration for live code examples
- **Responsive Design**: Mobile-first approach with dark mode support
- **SEO Optimized**: Built-in SEO features with Next.js App Router
- **User Authentication**: JWT-based authentication system (coming soon)
- **Practice Problems**: Categorized coding challenges with difficulty levels
- **Progress Tracking**: Track your learning journey (coming soon)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skillerset
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
skillerset/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar and Footer
│   ├── page.tsx           # Homepage
│   ├── tutorials/         # Tutorial pages
│   ├── courses/           # Course pages
│   ├── practice/          # Practice problems
│   ├── playground/        # Code playground
│   └── about/             # About page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   └── TutorialCard.tsx # Tutorial card component
├── lib/                   # Utility functions and API (coming soon)
├── public/                # Static assets
└── package.json          # Dependencies
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Code Editor**: Monaco Editor
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

## 🚧 Development Phases

### ✅ Phase 1: Foundation (Completed)
- [x] Set up Next.js project with Tailwind CSS
- [x] Create homepage with navigation
- [x] Build basic layout components
- [x] Implement routing structure

### 🔄 Phase 2: Core Features (In Progress)
- [ ] Develop tutorial page template
- [ ] Integrate Monaco Editor for code examples
- [ ] Create sidebar navigation
- [ ] Build content rendering system

### 📋 Phase 3: Interactive Features (Planned)
- [ ] Implement user authentication
- [ ] Add practice problems section
- [ ] Create user dashboard
- [ ] Build search functionality

### 📋 Phase 4: Advanced Features (Planned)
- [ ] Add admin panel
- [ ] Implement progress tracking
- [ ] Create quiz system
- [ ] Build discussion forum

### 📋 Phase 5: Polish & Deploy (Planned)
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Testing and bug fixes
- [ ] Deployment setup

## 🎯 Current Status

**Phase 1 Complete!** The foundation is set with:
- ✅ Modern homepage with hero section
- ✅ Featured programming languages grid
- ✅ Popular tutorials section
- ✅ Statistics section
- ✅ Navigation bar with mobile menu
- ✅ Footer with social links
- ✅ Routing structure for all main pages
- ✅ Responsive design
- ✅ Dark mode support

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

- `/` - Homepage
- `/tutorials` - All tutorials listing
- `/tutorials/[slug]` - Individual tutorial page
- `/courses` - Courses listing
- `/practice` - Practice problems
- `/playground` - Code playground
- `/about` - About page
- `/login` - Login page
- `/signup` - Sign up page

## 🔮 Future Enhancements

- User authentication and profiles
- Interactive code editor with live execution
- Practice problem submission and validation
- Progress tracking and certificates
- Admin panel for content management
- Search functionality with filters
- Discussion forum
- Quiz system
- Code sharing with unique URLs

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For questions or suggestions, please contact the development team.

---

**Built with ❤️ for learners everywhere**
