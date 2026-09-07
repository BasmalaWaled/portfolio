import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/layout";
import Index from "./pages/index";
import About from "./pages/About";
import Projects from "./pages/projects";
import Surrah from "./pages/Surrah";
import Bunyan from "./pages/Bunyan";
import Contact from "./pages/contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />

            <Route path="about" element={<About />} />

            <Route path="projects" element={<Projects />} />

            <Route path="projects/surrah" element={<Surrah />} />

            <Route path="projects/bunyan" element={<Bunyan />} />

            <Route path="contact" element={<Contact />} />
 
            <Route path="articles/biometric-authentication" />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
