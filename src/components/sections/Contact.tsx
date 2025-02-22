import { motion } from 'framer-motion';

import { config } from '../../constants/config';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { Header } from '../atoms/Header';
import { EarthCanvas } from '../canvas';

const Contact = () => {
  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        {Object.keys(config.contact.form).map(input => {
          const { span, placeholder } =
            config.contact.form[input as keyof typeof config.contact.form];

          return (
            <a
              key={span}
              href={placeholder}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: 'pointer' }}
            >
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
              </label>
            </a>
          );
        })}
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
