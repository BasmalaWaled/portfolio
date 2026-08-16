import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/layout";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Projects from "./pages/projects";
import Bunyan from "./pages/Bunyan";
import Contact from "./pages/contact";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";


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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="projects/bunyan" element={<Bunyan />} />
            <Route path="contact" element={<Contact />} />
         <Route path="articles" element={<Articles />} />
          <Route
  path="/articles/biometric-authentication"
  element={<ArticleDetails />}
/>
          </Route>
        </Routes>
     </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
