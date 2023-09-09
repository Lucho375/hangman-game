import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Footer() {
  return (
    <footer className="h-14 flex justify-center items-center p-5">
      <div className="flex flex-col">
        <h3 className="text-xs">Created by Luciano Rodríguez</h3>
        <nav className="flex justify-center">
          <a aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" href="https://github.com/Lucho375">
            <GitHubIcon className="hover:opacity-80 transition" />
          </a>

          <a
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/luciano-rodriguez97/"
          >
            <LinkedInIcon className="hover:opacity-80 transition" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
