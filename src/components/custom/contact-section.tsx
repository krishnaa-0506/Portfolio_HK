"use client";

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Github, Linkedin, Mail, Send, Bot, CheckCircle, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { RippleButton } from './ripple-button';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Please enter a valid mobile number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  const sectionRef = useScrollAnimation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/email-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      setFormSubmitted(true);
      toast({
        title: "Message Sent Successfully! ✓",
        description: "You’ll receive a confirmation email, and I’ll respond within 24-48 hours.",
        variant: "default",
      });
      form.reset();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 bg-secondary/50 scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          📞 Get In Touch!
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Card className="shadow-xl animate-formPopIn">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send me a message 💌</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Hk Jr." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="hk.jr@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1234567890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Let's build something amazing together! ✨" rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <RippleButton type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <Bot className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </RippleButton>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-formPopIn" style={{ animationDelay: '0.2s' }}>
            {formSubmitted && (
              <Alert variant="default" className="bg-primary/10 border-primary text-primary">
                <CheckCircle className="h-5 w-5 text-primary" />
                <AlertTitle className="font-semibold">Message Sent Successfully!</AlertTitle>
                <AlertDescription>
                  Your message has been received. You'll receive a confirmation email shortly.
                </AlertDescription>
              </Alert>
            )}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect with me:</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors">
                  <a href="https://github.com/krish0506-eng" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors">
                  <a href="https://www.linkedin.com/in/hari-krishnaa-n-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors">
                  <a href="mailto:krishnaahari05@gmail.com" aria-label="Email">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors">
                  <a href="https://www.instagram.com/fluffy_guy_06_?igsh=MXVpYm9lZnFvdTBuMA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors">
                  <a href="https://wa.me/916379726858" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-muted-foreground">
                I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out! 😊
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;