// Client Component
'use client'
import Menu from '@/components/Menu';
import Herosection from '@/components/Herosection';
import Aboutus from '@/components/Aboutus';
import Events from '@/components/Events';
import Enneagram from '@/components/Enneagram';
import Resources from '@/components/Resources';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
 
export default function Page() {
 
  return (
    <>
    <Menu/>
    <Herosection/>
    <Aboutus/>
    <Events/>
    <Enneagram />
    <Resources />
    <Testimonial/>
    <Footer/>
    </>
    );
}
 
