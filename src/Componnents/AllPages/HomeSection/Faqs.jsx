import React from 'react';
import Container from '../../Container/Container';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';

const Faqs = () => {
    return (
        <div className='p-4 mb-[40px] md:p-0'>
            <Container>
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}>
                    <h2 className="mt-6 text-3xl md:text-[40px] font-semibold  text-center">
                        Frequently asked questions
                    </h2>
                    <p className='md:w-2xl mx-auto text-center mt-[13px]'>Save yourself hours and get your to-do list completed.Save yourself hours and get your to-do list completedSave yourself hours and get your to-do list completed</p>



                </motion.div>



                <div className='md:w-2xl md:mx-auto mt-[34px]'>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">How do I create an account?</div>
                        <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300  mb-[10px]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-[10px]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Faqs;