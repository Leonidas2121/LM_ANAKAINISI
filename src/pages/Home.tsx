import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Sparkles, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const services = [
    {
      title: "Ολική Ανακαίνιση",
      description: "Πλήρης μετατροπή του χώρου σας με σύγχρονο design",
      icon: "🏗️",
    },
    {
      title: "Ανακαίνιση Μπάνιου",
      description: "Μοντέρνα και λειτουργικά μπάνια που εντυπωσιάζουν",
      icon: "🛁",
    },
    {
      title: "Ανακαίνιση Κουζίνας",
      description: "Κουζίνες που συνδυάζουν αισθητική και πρακτικότητα",
      icon: "🍳",
    },
    {
      title: "Ελαιοχρωματισμοί",
      description: "Επαγγελματικές βαφές για τέλειο αποτέλεσμα",
      icon: "🎨",
    },
  ];

  const features = [
    { text: "Έμπειρη ομάδα επαγγελματιών", icon: Users },
    { text: "Υψηλής ποιότητας υλικά", icon: Award },
    { text: "Σεβασμός στο χρονοδιάγραμμα", icon: CheckCircle2 },
    { text: "Προσαρμοσμένες λύσεις", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Μετατρέπουμε Χώρους σε <span className="text-accent">Όνειρα</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Επαγγελματικές ανακαινίσεις με έμφαση στην ποιότητα, την αισθητική και τη συνέπεια
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8">
              <Link to="/contact">
                Ζητήστε Προσφορά <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8">
              <Link to="/portfolio">Δείτε τα Έργα μας</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="bg-accent/10 p-4 rounded-full mb-4">
                      <Icon className="text-accent" size={32} />
                    </div>
                    <p className="font-inter font-semibold text-foreground">{feature.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">Οι Υπηρεσίες μας</h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Προσφέρουμε ολοκληρωμένες λύσεις ανακαίνισης για κάθε χώρο και ανάγκη
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-none overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="font-playfair text-2xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <Link to="/services">
                Δείτε Όλες τις Υπηρεσίες <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Έτοιμοι να Ξεκινήσουμε;
          </h2>
          <p className="font-inter text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Επικοινωνήστε μαζί μας σήμερα για μια δωρεάν προσφορά και ας δημιουργήσουμε μαζί τον χώρο των ονείρων σας
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8">
            <Link to="/contact">
              Επικοινωνήστε Μαζί Μας <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
