export default function Layout({children}:Readonly<{children:React.ReactNode;}>)
{
    return (
        <div className="container p-8">
            {children}
        </div>
    );
}