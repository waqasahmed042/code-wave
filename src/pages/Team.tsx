import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/Particles";
import { motion, AnimatePresence } from "framer-motion";

const Teams = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const teamMembers = [
        {
            id: 1,
            name: "Ali Hassan",
            role: "Lead Developer",
            bio: "With over 10 years of experience, Ali drives our technical innovation and project delivery.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
            social: "#"
        },
        {
            id: 2,
            name: "Sara Khan",
            role: "UI/UX Designer",
            bio: "Sara crafts stunning interfaces that enhance user experiences with her creative expertise.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
            social: "#"
        },
        {
            id: 3,
            name: "Omar Farooq",
            role: "Project Manager",
            bio: "Omar ensures seamless project execution and client satisfaction with his leadership skills.",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
            social: "#"
        },
        {
            id: 4,
            name: "Ayesha Malik",
            role: "Backend Engineer",
            bio: "Ayesha builds robust server-side solutions to power our cutting-edge applications.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
            social: "#"
        }
    ];

    return (
        <>
            <Header />

            <section
                className="relative py-20 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, hsl(var(--codewave-dark) / 0.9), hsl(var(--codewave-primary) / 0.8))`,
                }}
            >
                {/* Particles confined to Teams hero section */}
                <ParticleBackground />

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 text-white/80 mb-4 animate-fade-in">
                            <span>Home</span>
                            <ArrowRight className="w-4 h-4" />
                            <span>Teams</span>
                        </div>

                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Team
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-200 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Meet the talented individuals behind our success, driving innovation and excellence every day.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Teams Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                            <Users className="w-3 h-3 mr-1" />
                            OUR TEAM
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Meet the CodeWave Crew
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A diverse group of experts united by a passion for technology and delivering exceptional results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatePresence>
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="group"
                                >
                                    <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                        <CardHeader className="p-0">
                                            <div className="relative">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-6 text-center">
                                            <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                {member.name}
                                            </CardTitle>
                                            <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                                            <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                                className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                                            >
                                                <a href={member.social} target="_blank" rel="noopener noreferrer">
                                                    Connect <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Teams;