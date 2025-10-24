import { Input } from "@/components/ui/input";
const FooterNewsletter = () => {
  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
      <p className="text-sm text-gray-400 mb-6">
        Subscribe to our newsletter and never miss the latest updates, offers,
        and insights from our team.
      </p>
      <form className="flex relative">
        <Input
          type="email"
          placeholder="Enter your email"
          className="rounded-full bg-snow-white text-gray-300 placeholder-gray-500
           border-0 focus-visible:ring-custom-accent"
        />
        <button
          type="submit"
          className="bg-custom-accent text-black rounded-full absolute right-1 top-0.5 
          py-1 px-2 font-semibold"
        >
          Go
        </button>
      </form>
    </>
  );
};

export default FooterNewsletter;
