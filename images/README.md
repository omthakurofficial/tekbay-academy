# Image Assets Directory

Place your images in this folder with the following structure:

## Required Images:

### Logo
- `logo.png` or `logo.svg` - TekBay logo (anchor with circuit design)

### Hero Section
- `hero-students.jpg` - Group of students with thumbs up (from flyer page 1)

### Instructors
- `instructor-rojan.jpg` - Rojan Sedhai photo
- `instructor-om.jpg` - Om Prakash Thakur photo

### Pricing Section
- `student-macbook.jpg` - Student with MacBook (from flyer page 2)

### Icons (create or use icon library)
- `icon-learning.svg` - Learning icon
- `icon-certification.svg` - AWS certification badge
- `icon-career.svg` - Career/placement icon
- `icon-projects.svg` - Real-world projects icon
- `icon-experts.svg` - Certified experts icon
- `icon-refund.svg` - Money refund icon
- `icon-macbook.svg` - MacBook prize icon
- `icon-networking.svg` - Networking icon
- `icon-cloud.svg` - Cloud computing icon
- `icon-it-leaders.svg` - IT leaders icon
- `icon-tech-jobs.svg` - Tech jobs icon
- `icon-software.svg` - Software roles icon

## Usage in Components:

Import images like this:
```typescript
import logo from '../assets/images/logo.png';
import heroImage from '../assets/images/hero-students.jpg';
```

Or reference from public folder:
```html
<img src="/images/logo.png" alt="TekBay Logo" />
```
