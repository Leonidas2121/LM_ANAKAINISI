import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              LM <span className="text-accent">ΑΝΑΚΑΙΝΙΣΗ</span>
            </h3>
            <p className="font-inter text-sm text-primary-foreground/80">
              Εξειδικευμένη εταιρεία ανακαινίσεων με έμφαση στην ποιότητα, την αισθητική και τη συνέπεια.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Γρήγορες Συνδέσεις</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  Σχετικά με εμάς
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-accent transition-colors">
                  Έργα μας
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Νομικά</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  Πολιτική Απορρήτου
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-accent transition-colors">
                  Όροι Χρήσης
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-accent transition-colors">
                  Πολιτική Cookies
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-accent transition-colors">
                  Στοιχεία Γ.Ε.ΜΗ.
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Επικοινωνία</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-accent" />
                <span>+30 210 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-accent" />
                <span>info@lmanakainisi.gr</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent mt-1" />
                <span>Λεωφόρος Αθηνών 123<br />Αθήνα, 10431</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} LM ΑΝΑΚΑΙΝΙΣΗ. Όλα τα δικαιώματα κατοχυρωμένα.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
