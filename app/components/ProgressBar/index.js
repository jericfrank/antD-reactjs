import React from 'react';
import ProgressBar from './ProgressBar';

function withProgressBar ( WrappedComponent ) {
	class AppWithProgrssBar extends React.Component {
		constructor ( props ) {
			super( props );
			this.state = {
				progress     : -1,
				loadedRoutes : props.location && [ props.location.pathname ]
			};

			this.updateProgress = this.updateProgress.bind( this );
		}

		componentWillMount () {
			/* istanbul ignore next */
			this.unsubscribeHistory = this.props.router && this.props.router.listenBefore( ( location ) => {
				if ( this.state.loadedRoutes.indexOf( location.pathname ) === -1 ) {
					this.updateProgress( 0 );
				}
			} );
		}

		componentWillUpdate ( newProps, newState ) {
			const { loadedRoutes, progress } = this.state;
			const { pathname }               = newProps.location;

			if ( loadedRoutes.indexOf( pathname ) === -1 && progress !== -1 && newState.progress < 100 ) {
				this.updateProgress( 100 );
				this.setState( {
					loadedRoutes : loadedRoutes.concat( [ pathname ] )
				} );
			}
		}

		componentWillUnmount () {
			this.unsubscribeHistory = undefined;
		}

		updateProgress ( progress ) {
			this.setState( { progress } );
		}

		render () {
			return (
				<div>
					<ProgressBar percent={this.state.progress} updateProgress={this.updateProgress} />
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}

	AppWithProgrssBar.propTypes = {
		location : React.PropTypes.object,
		router   : React.PropTypes.object
	};

	return AppWithProgrssBar
}

export default withProgressBar;
