import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Σφάλμα",
        description: "Παρακαλώ συμπληρώστε όλα τα απαραίτητα πεδία",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Επιτυχία!",
      description: "Το μήνυμά σας στάλθηκε. Θα επικοινωνήσουμε μαζί σας σύντομα!",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Επικοινωνία
          </h1>
          <p className="font-inter text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ας δημιουργήσουμε μαζί τον χώρο των ονείρων σας
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                  Ζητήστε Προσφορά
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-inter">
                      Ονοματεπώνυμο *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Το όνομά σας"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-inter">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-inter">
                      Τηλέφωνο
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+30 210 123 4567"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-inter">
                      Μήνυμα *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Πείτε μας περισσότερα για το έργο σας..."
                      className="mt-2 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
                    Αποστολή Μηνύματος
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                  Στοιχεία Επικοινωνίας
                </h2>
                <p className="font-inter text-muted-foreground mb-8">
                  Είμαστε στη διάθεσή σας για να απαντήσουμε σε κάθε σας ερώτηση και να συζητήσουμε τις ανάγκες του έργου σας.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-accent border-t-0 border-r-0 border-b-0 shadow-md">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-lg mb-1">Τηλέφωνο</h3>
                      <p className="text-muted-foreground">+30 210 123 4567</p>
                      <p className="text-muted-foreground">+30 698 765 4321</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent border-t-0 border-r-0 border-b-0 shadow-md">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@lmanakainisi.gr</p>
                      <p className="text-muted-foreground">projects@lmanakainisi.gr</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent border-t-0 border-r-0 border-b-0 shadow-md">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-lg mb-1">Διεύθυνση</h3>
                      <p className="text-muted-foreground">
                        Λεωφόρος Αθηνών 123<br />
                        Αθήνα, 10431
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent border-t-0 border-r-0 border-b-0 shadow-md">
                  <CardContent className="flex items-start p-6">
                    <div className="bg-accent/10 p-3 rounded-full mr-4">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-lg mb-1">Ωράριο</h3>
                      <p className="text-muted-foreground">
                        Δευτέρα - Παρασκευή: 9:00 - 18:00<br />
                        Σάββατο: 10:00 - 14:00
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="font-inter text-muted-foreground">
                  Χάρτης Google Maps<br />
                  (Μπορεί να ενσωματωθεί με Google Maps API)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
