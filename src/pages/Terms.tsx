import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 mt-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-8">
            Όροι Χρήσης
          </h1>

          <div className="font-inter text-foreground space-y-6 leading-relaxed">
            <p className="text-muted-foreground">
              Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
            </p>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">1. Αποδοχή Όρων</h2>
              <p>
                Με την πρόσβαση και χρήση του ιστότοπου της LM ΑΝΑΚΑΙΝΙΣΗ, αποδέχεστε και συμφωνείτε να δεσμεύεστε 
                από τους παρόντες όρους χρήσης. Εάν δεν συμφωνείτε με οποιονδήποτε από αυτούς τους όρους, 
                παρακαλούμε μην χρησιμοποιείτε τον ιστότοπό μας.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">2. Χρήση του Ιστότοπου</h2>
              <p className="mb-3">Συμφωνείτε να χρησιμοποιείτε τον ιστότοπο μόνο για νόμιμους σκοπούς και με τρόπο που δεν παραβιάζει τα δικαιώματα, δεν περιορίζει ή αναστέλλει τη χρήση και απόλαυση του ιστότοπου από τρίτους.</p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">3. Πνευματικά Δικαιώματα</h2>
              <p>
                Όλο το περιεχόμενο του ιστότοπου, συμπεριλαμβανομένων κειμένων, γραφικών, λογότυπων, εικόνων και λογισμικού, 
                αποτελεί ιδιοκτησία της LM ΑΝΑΚΑΙΝΙΣΗ και προστατεύεται από τους ελληνικούς και διεθνείς νόμους περί πνευματικής ιδιοκτησίας.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">4. Υπηρεσίες και Προσφορές</h2>
              <p>
                Οι πληροφορίες για τις υπηρεσίες μας που παρέχονται στον ιστότοπο είναι ενδεικτικές. 
                Οι τελικές λεπτομέρειες, προϋπολογισμοί και χρονοδιαγράμματα θα καθορίζονται σε γραπτή συμφωνία 
                μετά από προσωπική συνάντηση και αξιολόγηση του έργου.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">5. Περιορισμός Ευθύνης</h2>
              <p>
                Η LM ΑΝΑΚΑΙΝΙΣΗ δεν φέρει ευθύνη για οποιαδήποτε ζημία που μπορεί να προκύψει από τη χρήση ή την αδυναμία 
                χρήσης του ιστότοπού μας, συμπεριλαμβανομένης της απώλειας δεδομένων ή κέρδους.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">6. Τροποποιήσεις</h2>
              <p>
                Διατηρούμε το δικαίωμα να τροποποιήσουμε αυτούς τους όρους χρήσης ανά πάσα στιγμή. 
                Οι αλλαγές θα τίθενται σε ισχύ αμέσως μετά τη δημοσίευσή τους στον ιστότοπο.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">7. Εφαρμοστέο Δίκαιο</h2>
              <p>
                Οι παρόντες όροι διέπονται από την ελληνική νομοθεσία. Οποιαδήποτε διαφορά που προκύπτει 
                από τη χρήση του ιστότοπου υπόκειται στην αποκλειστική δικαιοδοσία των δικαστηρίων της Αθήνας.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-primary mb-4">8. Επικοινωνία</h2>
              <p>
                Για ερωτήσεις σχετικά με τους όρους χρήσης, επικοινωνήστε μαζί μας στο: info@lmanakainisi.gr
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
