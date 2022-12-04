export const TicketInput = () => {
  return (
    <form
      action="/api/register"
      method="POST"
      className="mx-auto mt-8 flex max-w-md w-full flex-col border-gray-600 sm:bg-gray-200 bg-transparent sm:flex-row sm:rounded-full "
    >
      <input
        className="m-2 h-12 rounded-full px-4  sm:w-full  bg-transparent sm:border-slate-100 border md:border-none"
        placeholder="Enter your email"
        type="email"
        name="email"
        pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
        required
      />
      <button className="shrink-0 m-2 rounded-full bg-[#006233] px-8 py-3 font-medium text-white focus:bg-[#006233] focus:outline-none hover:bg-[#006233]">
        Get Your Free Ticket
      </button>
    </form>
  );
};
