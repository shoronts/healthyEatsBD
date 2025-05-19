export default function WhatsNew() {
  return (
    <div className="min-h-screen dark:bg-slate-900  to-white px-6 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-2 dark:text-gray-100 text-gray-800">
          What's new
        </h1>
        <p className="text-center text-gray-500 mb-20">
          Discover the latest features and improvements.
        </p>

        <div className="flex items-start gap-">
          {/* Left Side: Sidebar Info */}
          <div className="w-full max-w-xs">
            <p className="text-xs text-gray-400 mb-1">2 days ago</p>
            <h2 className="font-semibold dark:text-white text-black leading-snug mb-1 text-3xl">
              New Features, <br /> Enhancements, and <br /> Bug Fixes
            </h2>
            <p className="text-sm text-gray-400 flex gap-2 items-ce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M1.85 7.5q0-.431.063-.844l7.65-4.417q.45.177.859.424L3.77 6.503a.45.45 0 0 0-.234.374a.45.45 0 0 0 .196.394l3.592 2.567l-3.453 1.994A5.64 5.64 0 0 1 1.85 7.5m6.518 2.775l.025-.014l1.448-.836l.018-.01l1.451-.838a.45.45 0 0 0 .052-.756L7.828 5.2l3.388-1.957a5.64 5.64 0 0 1 1.849 5.24L5.569 12.81a5.6 5.6 0 0 1-.882-.41zm-.187-.931L4.817 6.939l.692-.4l3.297 2.444zM6.36 6.048l.62-.357l3.296 2.444l-.62.358zm1.973-4.137l-6.09 3.515a5.65 5.65 0 0 1 6.09-3.515M6.847 13.113q.321.037.653.037a5.65 5.65 0 0 0 5.189-3.41zM7.5.85a6.65 6.65 0 1 0 0 13.3a6.65 6.65 0 0 0 0-13.3" clipRule="evenodd"/></svg>
                Sprint 61</p>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-10">
            <div>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mb-4">
                New Features
              </span>
              <div className="space-y-6 text-sm text-gray-700">
                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    WooCommerce integration
                  </h3>
                  <p className="mb-2">
                    <strong>WooCommerce Abandoned Cart - Extended Timing Options and Bangla Digits Conversion</strong><br />
                    The WooCommerce Abandoned Cart plugin update introduces new timing options for identifying abandoned carts, allowing selections of 30 minutes, 1 hour, or 2 hours. These settings appear as radio buttons in the cart abandonment settings, enabling you to tailor when a cart is flagged as abandoned based on your customers' browsing patterns. Furthermore, the update implements functionality to convert Bangla digits entered in the phone number field during checkout into English digits, ensuring consistency in customer contact information. The conversion applies Bangla (০–৯) to English (0–9) digits automatically, maintaining the correct format of phone numbers.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    WooCommerce Customer Association Logic Update
                  </h3>
                  <p>
                    The updated WooCommerce integration now prioritizes the <strong>phone number</strong> over the email for customer mapping when orders are created through integrations. This change addresses issues where incorrect customer associations occurred due to email matching. The phone number is now the primary unique identifier for customer records. If a phone number matches an existing customer, the customer is retained; otherwise, a new customer is created. Emails will only influence the database if they do not conflict with existing phone numbers, preserving data integrity.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    Customer Mapping Adjustment for Shopify Integration
                  </h3>
                  <p>
                    We’ve modified the customer mapping logic in our Shopify integration to prioritize the <strong>phone number</strong> when orders are created. This change improves accuracy and prevents conflicts due to duplicated or outdated email data.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    Woocomarce logic updates
                  </h3>
                  <p>
                    We’ve modified the customer mapping logic in our Shopify integration to prioritize the <strong>phone number</strong> when orders are created. This change improves accuracy and prevents conflicts due to duplicated or outdated email data.the customer is retained; otherwise, a new customer is created. Emails will only influence the database if they do not conflict with existing phone numbers, preserving data integrity. over the email for customer mapping when orders are created through integrations. This change addresses issues where incorrect customer associations occurred due to email matching.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    WooCommerce Customer Association Logic Update
                  </h3>
                  <p>
                    The Updated WooCommerce integration now priotizes the phone number ever .The email for customer mapping when orders are created throuh integrations.This change addresses issues where incorrent customer associations.
                    We’ve modified the customer mapping logic in our Shopify integration to prioritize the <strong>phone number</strong> when orders are created. This change improves accuracy and prevents conflicts due to duplicated or outdated email data.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    Customer Mapping Adjustment for shopify integration
                  </h3>
                  <p>
                    We’ve modified the customer mapping logic in our Shopify integration to prioritize the <strong>phone number</strong> when orders are created. This change improves accuracy and prevents conflicts due to duplicated or outdated email data.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere fugiat delectus deleniti minus ipsum hic consectetur error! Eum iusto ratione unde voluptas placeat! Eaque ipsa suscipit pariatur labore ab. Ad non aut architecto necessitatibus nihil ipsa molestiae saepe maxime accusantium.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    Accept access to Understack Inventory Feature Flag
                  </h3>
                  <p>
                    We’ve modified the customer mapping logic in our Shopify integration to prioritize the <strong>phone number</strong> when orders are created. This change improves accuracy and prevents conflicts due to duplicated or outdated email data.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum eaque ex praesentium adipisci nobis quibusdam nemo modi tempore debitis. Earum magni, quam accusantium consequatur quae quis vero atque aperiam incidunt cum ab veniam at voluptates dicta obcaecati error labore.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base dark:text-white text-black mb-1">
                    Explain modules
                  </h3>
                  <p>
                    We’ve modified the customer mapping logic in our Shopify integration to prioritize the <strong>phone number</strong> when orders are created. This change improves accuracy and prevents conflicts due to duplicated or outdated email data.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis inventore dolor repudiandae voluptatem assumenda explicabo dicta ipsa qui eos dolore, perferendis similique nemo? Necessitatibus laboriosam fuga quas rem magni id, non provident facere mollitia harum ab neque est cum doloremque ratione esse eveniet, autem nihil accusantium inventore exercitationem, atque ea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
