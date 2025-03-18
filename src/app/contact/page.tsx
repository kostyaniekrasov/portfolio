'use client';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+380 98 345 78 18',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'niekrasov.kostya@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: 'Ukraine, Kyiv',
  },
];

import { AnimatePresence, motion } from 'framer-motion';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Input,
  Textarea,
} from '@/components';
import { useEffect, useState } from 'react';

interface AlertType {
  message: string;
  id: string;
  type: 'default' | 'destructive';
}

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const addAlert = async (
    message: string,
    type?: 'default' | 'destructive',
    copiedText?: string,
  ) => {
    const key = message + Math.random();

    try {
      setAlerts((prev) => [
        ...prev,
        { message, id: key, type: type ?? 'default' },
      ]);

      if (copiedText) {
        await navigator.clipboard.writeText(copiedText);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`;

    // const message = `Ім'я: ${data.firstname + ' ' + data.lastname}\nEmail: ${data.email}\nТелефон: ${data.phone}\nПовідомлення: ${data.message}`;

    const response = await fetch(
      'https://formsubmit.co/05838c1618604d4a3a5ee47fca1ef53a',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    ).finally(() => setIsLoading(false));

    // await fetch(TELEGRAM_API_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    //     text: message,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log('Error:', error));
    if (response.ok) {
      addAlert(
        'The letter has been sent successfully, I will contact you soon.',
      );
      reset();
    } else {
      addAlert('Error sending, please try again.', 'destructive');
    }
  };

  useEffect(() => {
    if (alerts.length === 0) return;

    const timer = setTimeout(() => {
      setAlerts((prev) => prev.slice(1));
    }, 10000);

    return () => clearTimeout(timer);
  }, [alerts]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
            >
              <h3 className="text-accent text-4xl">Lets work together</h3>

              <p className="text-white/60">
                Fill out the form and I will contact you as soon as possible.
              </p>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="relative">
                  <Input
                    type="firstname"
                    placeholder="Firstname"
                    {...register('firstname', {
                      required: 'Firstname is required',
                    })}
                  />
                  <AnimatePresence mode="wait">
                    {errors.firstname && (
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute -bottom-6 text-sm text-red-500"
                      >
                        {errors.firstname.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <Input
                    type="lastname"
                    placeholder="Lastname"
                    {...register('lastname', {
                      required: 'Lastname is required',
                    })}
                  />

                  <AnimatePresence mode="wait">
                    {errors.lastname && (
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute -bottom-6 text-sm text-red-500"
                      >
                        {errors.lastname.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email address"
                    {...register('email', {
                      required: 'Email is required',
                    })}
                  />

                  <AnimatePresence mode="wait">
                    {errors.email && (
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute -bottom-6 text-sm text-red-500"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="relative">
                  <Input
                    type="phone"
                    placeholder="Pnone number"
                    {...register('phone', {
                      required: 'Phone is required',
                    })}
                  />

                  <AnimatePresence mode="wait">
                    {errors.phone && (
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: -10,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute -bottom-6 text-sm text-red-500"
                      >
                        {errors.phone.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative">
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                  {...register('message', {
                    required:
                      'Message is required, send your linkedIn or vacancy link',
                  })}
                />

                <AnimatePresence mode="wait">
                  {errors.message && (
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{
                        y: -10,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="absolute right-0 -bottom-6 text-sm text-red-500"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <Button
                size="sm"
                className="max-w-40"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="fill-primary h-8 w-8 animate-spin text-white/60"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  'Send message'
                )}
              </Button>
            </form>
          </div>

          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item) => {
                return (
                  <li
                    key={item.title}
                    onClick={() =>
                      addAlert(
                        `${item.title} copied to clipboard`,
                        'default',
                        item.description,
                      )
                    }
                    className="flex cursor-pointer items-center gap-6"
                  >
                    <div
                      className="text-accent flex h-[52px] w-[52px] items-center justify-center rounded-md
                        bg-[#27272c] xl:h-[72px] xl:w-[72px]"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed top-5 right-5 flex flex-col gap-2">
        <AnimatePresence>
          {alerts.map((alert, index) => {
            return (
              <motion.div
                key={alert.id}
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: -100,
                  opacity: 0,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Alert
                  variant={alert.type}
                  className="w-sm"
                >
                  <AlertTitle
                    className={`${alert.type === 'destructive' ? 'text-red-500' : 'text-accent'}`}
                  >
                    {alert.type === 'destructive' ? 'Error' : 'Successful'}
                  </AlertTitle>
                  <AlertDescription>{alert.message}</AlertDescription>
                </Alert>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Contact;
