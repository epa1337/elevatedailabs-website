export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-screen-xl mx-auto py-12 px-4 md:px-6">
        {/* Company section - centered */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold">Elevated AI Labs Inc.</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Building the future of AI solutions
          </p>
        </div>

        {/* Links section - centered with fixed widths */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center">
            <div>
              <h4 className="text-sm font-semibold mb-3">About Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#" className="text-muted-foreground hover:text-foreground">Team</a></li>
                <li><a href="/#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="mailto:team@elevatedailabs.com" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Privacy</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-muted-foreground hover:text-foreground">Terms and Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Social</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
                <li><a href="/#" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
                <li><a href="/#" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 