function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 p-4 text-white text-center">
            &copy; {year} RiftySummoners. All rights reserved.
        </footer>
    );
}

export default Footer;