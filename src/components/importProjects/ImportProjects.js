import { useCallback } from 'react'
import tw from 'twin.macro'
import { navigate } from '@reach/router'
import { IconBrandGithub, IconBrandGitlab } from '@tabler/icons'
import H1 from '../typography/H1'
import { ReactComponent as IconBrandJira } from '../../assets/img/logo-jira.svg'
import ImportButton from './ImportButton'

const ImportProjects = ({ title, subtitle }) => {
  const selectProvider = useCallback(provider => {
    navigate(`/import/${provider}`)
  })

  return (
    <section tw='text-center'>
      <header tw='mb-8'>
        <H1 tw='mb-2'>{title || 'Import project'}</H1>
        <p tw='text-sm'>
          {subtitle || 'Get all project tasks from a platform below.'}
        </p>
      </header>
      <div tw='flex flex-row items-center'>
        <ImportButton color='github' onPress={() => selectProvider('github')}>
          <IconBrandGithub size={48} />
          <span>Import from Github</span>
        </ImportButton>
        <ImportButton color='jira' onPress={() => selectProvider('jira')}>
          <IconBrandJira height={48} />
          <span>Import from Jira</span>
        </ImportButton>
        <ImportButton color='gitlab' onPress={() => selectProvider('gitlab')}>
          <IconBrandGitlab height={48} />
          <span>Import from Gitlab</span>
        </ImportButton>
      </div>
    </section>
  )
}

export default ImportProjects
