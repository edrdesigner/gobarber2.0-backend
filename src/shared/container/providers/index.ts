import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherialMailProvider from './MailProvider/implementations/EtherialMailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

// Cria uma instancia pois tem um construtor sendo singleton
container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherialMailProvider(),
);
