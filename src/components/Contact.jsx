function Contact() {
  return (
    <section id="contact" className="py-20 px-6">

      <h2 className="text-4xl font-bold text-center">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto mt-12 text-center">

        <p className="text-gray-300 text-lg">
          Feel free to connect with me for opportunities, collaborations, or discussions related to Data Analytics.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="mailto:shreyajadhav1364@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/shreya--jadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Shreya1364"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            GitHub
          </a>

          <a
            href="tel:+919834427626"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Call Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;