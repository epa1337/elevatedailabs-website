export function Navigation() {
  return (
    <nav className="flex items-center space-x-6">
      <a href="/about" className="text-sm font-medium hover:text-foreground/80">
        About
      </a>
      <a href="/services" className="text-sm font-medium hover:text-foreground/80">
        Services
      </a>
      <a href="/contact" className="text-sm font-medium hover:text-foreground/80">
        Contact
      </a>
    </nav>
  );
} 