import { useState } from 'react';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import ScrollReveal from '../../common/ScrollReveal/ScrollReveal';
import { validateContactForm } from '../../../utils/validators';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact({ personal }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate form submission — replace with your backend/API integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          title="Contact Me"
          subtitle=""
        />

        <div className={styles.grid}>
          <ScrollReveal>
            <div className={styles.info}>
              <h3 className={styles.infoTitle}>Get in Touch</h3>
              <p className={styles.infoText}>
                I&apos;m currently open to new opportunities and collaborations.
                Feel free to reach out.
              </p>

              <ul className={styles.contactList}>
                <li>
                  <FiMail className={styles.contactIcon} />
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </li>
                <li>
                  <FiPhone className={styles.contactIcon} />
                  <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                </li>
                <li>
                  <FiMapPin className={styles.contactIcon} />
                  <span>{personal.location}</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? styles.inputError : ''}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className={styles.error} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={errors.email ? styles.inputError : ''}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className={styles.error} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={errors.subject ? styles.inputError : ''}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className={styles.error} role="alert">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={errors.message ? styles.inputError : ''}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className={styles.error} role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </button>

              <AnimatePresence>
                {status && (
                  <motion.div
                    className={`${styles.notification} ${styles[status]}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    role="alert"
                  >
                    {status === 'success'
                      ? 'Message sent successfully! I\'ll get back to you soon.'
                      : 'Something went wrong. Please try again later.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
