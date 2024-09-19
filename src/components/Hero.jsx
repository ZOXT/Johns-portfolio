import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast']

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length]
      const isComplete = typedText === currentRole

      if (isComplete && !isDeleting) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }

      setTypedText(
        isDeleting
          ? currentRole.substring(0, typedText.length - 1)
          : currentRole.substring(0, typedText.length + 1)
      )
      setTypingSpeed(isDeleting ? 75 : 150)
    }

    const timer = setTimeout(handleTyping, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, isDeleting, loopNum, typingSpeed])

  return (
    <section className="text-center py-20 bg-gray-900 text-white">
      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?cs=srgb&dl=pexels-olly-3761521.jpg&fm=jpg"
          alt="Avatar"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </div>

      
      <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
        Hi, I’m{' '}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          John Lusch
        </span>
      </h1>

      
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-gray-300">{typedText}</span>
        <span className="blinking-cursor">|</span>
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mb-8 px-4">
      I am a seasoned full stack software engineer with over 14 years of experience, specializing in designing and implementing scalable backend architectures and cloud-based SaaS solutions on AWS. My expertise spans across front-end and back-end development, ensuring seamless integration and optimal performance of cloud infrastructure.
      </p>

      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/john-lusch-854630b5/ "target="_blank">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
          Get in Touch
        </button>
        </a>
        <a href='' download="../../public/JohnLuschResume.pdf">
        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
          Download CV
        </button>
        </a>
      </div>
    </section>
  )
}

export default Hero
