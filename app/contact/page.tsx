export default function ContactPage() {
  return (
    <div className="pt-32">

      <div className="container-custom">

        <h1 className="heading-font text-6xl mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-xl mb-4">
              Email
            </h3>

            <p>
              jedidahogidi@gmail.com
            </p>

            <h3 className="text-xl mt-10 mb-4">
              WhatsApp
            </h3>

            <p>
              +234 XXX XXX XXXX
            </p>

          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-4"
            />

            <textarea
              rows={6}
              placeholder="Message"
              className="w-full border p-4"
            />

            <button
              className="btn-primary"
              type="submit"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
