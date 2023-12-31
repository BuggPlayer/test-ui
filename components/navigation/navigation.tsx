import Link from "next/link";
import PaddingContainer from "../layout/padding-container";

const Navigation = async ({ locale }: { locale: string }) => {
  return (
    <div className="sticky top-0 z-[999] left-0 right-0 bg-white bg-opacity-50 border-b backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between py-5">
          <Link className="text-lg font-bold" href={`/`}>
            TechBlog
          </Link>
          {/* Category Links */}
          {/* <nav>
            <ul className="flex items-center gap-4 text-neutral-600">
              <li>
                <LangSwitcher locale={locale} />
              </li>
              <li>
                <Link href={`/${locale}/cities`}>
                  {dictionary.navigation.links.cities}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences`}>
                  {dictionary.navigation.links.experience}
                </Link>
              </li>
            </ul>
          </nav> */}
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Navigation;
