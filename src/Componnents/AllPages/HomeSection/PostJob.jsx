import React from 'react';
import Container from '../../Container/Container';
import { Link } from 'react-router';
import './postjob.css'
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';

const tasks = [
  { title: 'Handyperson', desc: 'Help with home maintenance', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Cleaner', desc: 'House cleaning services', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Gardener', desc: 'Lawn & garden care', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Electrician', desc: 'Electrical repairs', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Plumber', desc: 'Fix leaks & pipes', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Painter', desc: 'Home painting services', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Mover', desc: 'Help with moving', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Tutor', desc: 'Teaching services', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Driver', desc: 'Personal driving services', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
  { title: 'Chef', desc: 'Personal chef', img: 'https://images.airtasker.com/v7/www.airtasker.com/static/assets/5a21d886cdab7130.png?w=73&h=73&q=80' },
];

const PostJob = () => {
  const allTasks = tasks.concat(tasks);
  return (
    <Container>
      <div>

        <div className=" md:flex md:items-center md:justify-center px-4 md:px-0 my-[40px] md:flex items-start gap-6">


          <motion.div
          variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-1/2">
            <h2 className="text-[40px] font-semibold">Post your first task in seconds</h2>
            <p className="text-[18px] mb-[20px] mt-[10px] font-normal">
              Save yourself hours and get your to-do list completed
            </p>

            <div className="flex gap-4 pb-[16px]">
              <div className="bg-[#0ab99066] text-[16px] text-[#16c39b] p-4 rounded-full h-[30px] w-[30px] flex justify-center items-center">1</div>
              <div>Describe what you need done</div>
            </div>
            <div className="flex gap-4 pb-[16px]">
              <div className="bg-[#0ab99066] text-[16px] text-[#16c39b] p-4 rounded-full h-[30px] w-[30px] flex justify-center items-center">2</div>
              <div>Set your budget</div>
            </div>
            <div className="flex gap-4 pb-[16px]">
              <div className="bg-[#0ab99066] text-[16px] text-[#16c39b] p-4 rounded-full h-[30px] w-[30px] flex justify-center items-center">3</div>
              <div>Receive quotes and pick the best Tasker</div>
            </div>

            <Link className="inline-block rounded border border-[#0ab991] bg-[#0ab991] px-5 py-3 font-medium text-white mt-[14px] shadow-sm transition-colors hover:bg-[#3cc7ac] hover:border-[#3cc7ac]">
              Get Started
            </Link>
          </motion.div>


          <div className="w-full md:w-1/2 bg-[#0ab99066] rounded-[8px] h-[500px] overflow-hidden px-[15px] mt-[20px]">
            <div className="marquee-vertical">
              <div className="marquee-content grid grid-cols-2 gap-4">
                {allTasks.map((task, index) => (
                  <div key={index} className="bg-white flex gap-[10px] items-center px-[10px] py-[10px] rounded-[8px] h-[100px]">
                    <img src={task.img} alt={task.title} className="rounded-[8px]" />
                    <div>
                      <h2 className="text-[16px] text-black font-normal">{task.title}</h2>
                      <p className="text-[14px] text-gray-600">{task.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </Container>
  );
};
export default PostJob;
