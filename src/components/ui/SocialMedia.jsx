import {IconButton} from "@mui/material";

const SocialMedia = ({media}) => {
  return (
      <IconButton aria-label={media.label}>
        <a href={media.url} target="_blank" rel="noopener noreferrer">
          {media.icon}
        </a>
      </IconButton>
  )
}

export default SocialMedia;