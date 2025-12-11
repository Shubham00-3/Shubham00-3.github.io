import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-border">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Shubham Gangwar</p>
                <div className="flex items-center gap-6">
                    <Link href="https://github.com/Shubham00-3" target="_blank" className="hover:text-foreground transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/shubham-gangwar-a33b53204/" target="_blank" className="hover:text-foreground transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="mailto:shubhamgangwar244@gmail.com" className="hover:text-foreground transition-colors">
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
